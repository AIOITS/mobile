import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import ConfirmMessage from '../../../components/Info/ConfirmMessage';
import { Icon } from '@rneui/base';
import { MenuScreenNavigationProp } from '../../../navigator/Menu/Menu';
import { useNavigation } from '@react-navigation/native';

const SuccessPerpanjangSIM = () => {
  const tw = useTailwind();
  const navigation = useNavigation<MenuScreenNavigationProp>();

  return (
    <ConfirmMessage
      onNavigationClick={() => navigation.navigate('Home')}
      titleButton="Kembali ke Beranda"
      header="Perpanjangan SIM berhasil"
      subHeader="Dalam 2 - 3 hari, akan ada pemberitahuan untuk mengambil SIM dari SATPAS terdekat. Silahkan datang ke SATPAS jika sudah mendapat pemberitahuan">
      <Icon
        name="checkcircle"
        type="antdesign"
        size={80}
        color={'white'}
      />
    </ConfirmMessage>
  );
};

export default SuccessPerpanjangSIM;
