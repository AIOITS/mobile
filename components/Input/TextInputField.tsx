import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/themed';

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChangeValue: (text: string) => void;
  isPassword?: boolean;
};

const TextInputField = ({
  label,
  placeholder,
  value,
  onChangeValue,
  isPassword,
}: Props) => {
  const tw = useTailwind();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View style={tw('my-2')}>
      <Text style={tw('mb-2')}>{label}</Text>
      {isPassword ? (
        <View style={tw('flex flex-row justify-center items-center')}>
          <TextInput
            placeholder={placeholder}
            style={tw(
              'bg-secondary-white border-2 flex-1 border-disable py-2 rounded-lg px-4',
            )}
          />
          <TouchableOpacity
            style={tw('absolute right-4')}
            onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'eye' : 'eye-with-line'}
              type="entypo"
              size={25}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeValue}
          style={tw(
            'bg-secondary-white border-2 border-disable py-2 rounded-lg px-4',
          )}
        />
      )}
    </View>
  );
};

export default TextInputField;
