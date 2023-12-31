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
  gap?: number;
  labelStyle?: string;
};

const TextInputField = ({
  label,
  placeholder,
  value,
  onChangeValue,
  gap,
  isPassword,
  labelStyle,
}: Props) => {
  const tw = useTailwind();
  const [showPassword, setShowPassword] = useState<boolean>(true);

  return (
    <View style={[tw('my-2'), { gap: gap ? gap : 0 }]}>
      <Text style={tw(`mb-2 ${labelStyle ? labelStyle : ''}`)}>{label}</Text>
      {isPassword ? (
        <View style={tw('flex flex-row justify-center items-center')}>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeValue}
            secureTextEntry={showPassword}
            style={[
              tw(
                'bg-secondary-white flex-1 border-disable py-2 rounded-lg px-4',
              ),
              { borderWidth: 1 },
            ]}
          />
          <TouchableOpacity
            style={tw('absolute right-4')}
            onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'eye-with-line' : 'eye'}
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
          style={[
            tw('bg-secondary-white border-disable py-2 rounded-lg px-4'),
            { borderWidth: 1 },
          ]}
        />
      )}
    </View>
  );
};

export default TextInputField;
