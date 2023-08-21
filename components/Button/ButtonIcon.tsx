import { View, Text, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import { useTailwind } from 'tailwind-rn';

interface Props {
  children: ReactNode;
  titleButton: string;
  gap?: number;
}

const ButtonIcon = ({ children, titleButton, gap }: Props) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity style={[tw('bg-secondary-white px-4 py-3 rounded-lg')]}>
      <View
        style={[
          tw('flex flex-row items-start justify-start'),
          { gap: gap ? gap : 10 },
        ]}>
        {children}
        <Text style={tw('text-cape-storm')}>{titleButton}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
