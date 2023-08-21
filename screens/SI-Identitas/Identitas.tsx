import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';

const Identitas = () => {
  const tw = useTailwind();

  return (
    <View>
      <Text>Identitas</Text>
    </View>
  );
};

export default Identitas;
