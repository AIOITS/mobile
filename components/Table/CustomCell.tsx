import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { normalize } from '@rneui/themed';

interface Props {
  title: string;
}

const CustomCell = ({ title }: Props) => {
  const tw = useTailwind();

  return (
    <Text style={[tw('text-left font-semibold'), { fontSize: normalize(12) }]}>
      {title}
    </Text>
  );
};

export default CustomCell;
