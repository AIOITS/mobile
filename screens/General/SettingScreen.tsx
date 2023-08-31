import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import ButtonComponent from '../../components/Button/ButtonComponent';
import { useTailwind } from 'tailwind-rn';
import { useAuthContext } from '../../contexts/Auth/AuthContext';

const SettingScreen = () => {
  const tw = useTailwind();
  const auth = useAuthContext();

  const handleLogout = () => {
    auth.SignOut();
  };

  return (
    <BackgroundWithHeader
      header="Pengaturan"
      subHeader="Pengaturan aplikasi"
      bell
      main>
      <View style={tw('w-full')}>
        <ButtonComponent
          buttonTitle="Logout"
          onNavigationClick={() => {
            handleLogout();
          }}
        />
      </View>
    </BackgroundWithHeader>
  );
};

export default SettingScreen;
