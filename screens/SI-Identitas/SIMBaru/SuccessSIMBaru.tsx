import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import ConfirmMessage from '../../../components/Info/ConfirmMessage';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { MenuScreenNavigationProp } from '../../../navigator/Menu/Menu';

const SuccessSIMBaru = () => {
  const tw = useTailwind();
  const navigation = useNavigation<MenuScreenNavigationProp>();

  return (
    <ConfirmMessage
      onNavigationClick={() => navigation.navigate('Home')}
      titleButton="Kembali ke Beranda"
      header="Tes praktik telah dijadwalkan"
      subHeader="Tes praktik akan dilaksanakan pada 14 Desember 2022 di Satpas Colombo SIm, Surabya.">
      <Icon
        name="checkcircle"
        type="antdesign"
        size={80}
        color={'white'}
      />
    </ConfirmMessage>
  );
};

export default SuccessSIMBaru;
