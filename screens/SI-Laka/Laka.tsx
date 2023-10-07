import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';

const Laka = () => {
  const tw = useTailwind();

  return (
    <BackgroundWithHeader
      header="SI Laka"
      subHeader="Histori kecelakaan"
      bell
      main>
      <Text>Cooming Soon</Text>
    </BackgroundWithHeader>
  );
};

export default Laka;
