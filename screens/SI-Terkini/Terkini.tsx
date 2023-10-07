import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';

const Terkini = () => {
  const tw = useTailwind();

  return (
    <BackgroundWithHeader
      header="SI Terkini"
      subHeader="Berita lalu lintas di sekitar kamu"
      bell
      main>
      <Text>Cooming Soon</Text>
    </BackgroundWithHeader>
  );
};

export default Terkini;
