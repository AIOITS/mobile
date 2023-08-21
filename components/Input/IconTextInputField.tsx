import { View, Text, TextInput } from 'react-native';
import React, { ReactNode } from 'react';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/themed';

interface Props {
  placeholder: string;
  children: ReactNode;
  filter?: boolean;
  placeholderStyle?: string;
}

const IconTextInputField = ({
  filter,
  children,
  placeholder,
  placeholderStyle,
}: Props) => {
  const tw = useTailwind();

  return (
    <View style={tw('flex flex-row justify-center items-center')}>
      <View style={tw('absolute z-10 left-3')}>{children}</View>
      <TextInput
        placeholder={placeholder}
        style={tw(
          `bg-secondary-white border-2 flex-1 border-disable py-2 rounded-lg px-4 pl-12 ${
            placeholderStyle ? placeholderStyle : ''
          }`,
        )}
      />
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
