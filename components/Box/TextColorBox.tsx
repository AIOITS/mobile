import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';

interface Props {
  title: string;
  color: string;
}

const TextColorBox = ({ title, color }: Props) => {
  const tw = useTailwind();

  return (
    <Text
      style={tw(`text-xs font-light rounded-md px-2 py-1 text-white ${color}`)}>
      {title}
    </Text>
  );
};

export default TextColorBox;
