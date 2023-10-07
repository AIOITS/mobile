import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';

const Edukasi = () => {
  const tw = useTailwind();

  return (
    <BackgroundWithHeader
      header="SI Edukasi"
      subHeader="Edukasi seputar berkendara"
      bell
      main>
      <Text>Cooming Soon</Text>
    </BackgroundWithHeader>
  );
};

export default Edukasi;
