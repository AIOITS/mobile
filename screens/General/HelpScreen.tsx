import { View, Text } from 'react-native';
import React from 'react';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';

const HelpScreen = () => {
  return (
    <BackgroundWithHeader
      header="Bantuan"
      subHeader="Bantuan aplikasi"
      bell
      main>
      <Text>Bantuan</Text>
    </BackgroundWithHeader>
  );
};

export default HelpScreen;
