import { View, Text, TextInput } from 'react-native';
import React, { ReactNode } from 'react';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/themed';

interface Props {
  placeholder: string;
  children: ReactNode;
  filter?: boolean;
  right?: boolean;
  placeholderStyle?: string;
  value?: string;
  onChangeValue?: (text: string) => void;
}

const IconTextInputField = ({
  filter,
  children,
  right,
  placeholder,
  placeholderStyle,
  value,
  onChangeValue,
}: Props) => {
  const tw = useTailwind();

  return (
    <View style={tw('flex flex-row justify-center items-center')}>
      {!right && <View style={tw('absolute z-10 left-3')}>{children}</View>}
      <TextInput
        value={value}
        onChange={(e) => onChangeValue && onChangeValue(e.nativeEvent.text)}
        placeholder={placeholder}
        style={[
          tw(
            `bg-secondary-white flex-1 border-disable py-2 rounded-lg px-4 ${
              right ? 'pl-5' : 'pl-12'
            } ${placeholderStyle ? placeholderStyle : ''}`,
          ),
          { borderWidth: 1 },
        ]}
      />
      {right && <View style={tw('absolute z-10 right-4')}>{children}</View>}
      {filter && (
        <View style={tw('ml-3')}>
          <Icon
            name={'filter'}
            type="font-awesome-5"
            size={25}
            color="#00A0F3"
          />
        </View>
      )}
    </View>
  );
};

export default IconTextInputField;
