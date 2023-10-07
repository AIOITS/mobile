import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';

const Tilang = () => {
  const tw = useTailwind();

  return (
    <BackgroundWithHeader
      header="SI Tilang"
      subHeader="Tindak lanjut tilang elektronik"
      bell
      main>
      <Text>Cooming Soon</Text>
    </BackgroundWithHeader>
  );
};

export default Tilang;
