import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import ConfirmMessage from '../../../components/Info/ConfirmMessage';
import { useNavigation } from '@react-navigation/native';
import { MenuScreenNavigationProp } from '../../../navigator/Menu/Menu';
import { Icon } from '@rneui/themed';

const SuccessBayarPajak = () => {
  const tw = useTailwind();
  const navigation = useNavigation<MenuScreenNavigationProp>();

  return (
    <ConfirmMessage
      onNavigationClick={() => navigation.navigate('Home')}
      titleButton="Kembali ke Beranda"
      header="Bayar Pajak"
      subHeader="Pajak Kendaraan L 1150 CC berhasil dibayar">
      <Icon
        name="checkcircle"
        type="antdesign"
        size={80}
        color={'white'}
      />
    </ConfirmMessage>
  );
};

export default SuccessBayarPajak;
