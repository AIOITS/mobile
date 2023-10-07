import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';

const Lalin = () => {
  const tw = useTailwind();

  return (
    <BackgroundWithHeader
      header="SI Lalin"
      subHeader="Pantau peta lalu lintas tekini"
      bell
      main>
      <Text>Cooming Soon</Text>
    </BackgroundWithHeader>
  );
};

export default Lalin;
