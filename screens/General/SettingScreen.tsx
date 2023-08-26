import { View, Text } from 'react-native';
import React from 'react';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';

const SettingScreen = () => {
  return (
    <BackgroundWithHeader
      header="Pengaturan"
      subHeader="Pengaturan aplikasi"
      bell
      main>
      <Text>Pengaturan</Text>
    </BackgroundWithHeader>
  );
};

export default SettingScreen;
