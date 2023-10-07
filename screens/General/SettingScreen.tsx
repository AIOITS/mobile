import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import ButtonComponent from '../../components/Button/ButtonComponent';
import { useTailwind } from 'tailwind-rn';
import { useAuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { RegisNavigationProps } from '../../navigator/Auth/RegisNavigationProps';

const SettingScreen = () => {
  const tw = useTailwind();
  const auth = useAuthContext();
  const navigation = useNavigation<RegisNavigationProps>();

  const handleLogout = () => {
    auth.SignOut();
    navigation.navigate('LoginByEmail');
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
