import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import { MenuScreenNavigationProp } from '../../../navigator/Menu/Menu';
import ConfirmMessage from '../../../components/Info/ConfirmMessage';
import { Icon } from '@rneui/themed';

const SuccessPinjamSTNK = () => {
  const tw = useTailwind();
  const navigation = useNavigation<MenuScreenNavigationProp>();

  return (
    <ConfirmMessage
      onNavigationClick={() => navigation.navigate('Home')}
      titleButton="Kembali ke Beranda"
      header="Peminjaman disetujui"
      subHeader="STNKmu dapat diakses peminjam selama durasi yang telah ditetapkan">
      <Icon
        name="checkcircle"
        type="antdesign"
        size={80}
        color={'white'}
      />
    </ConfirmMessage>
  );
};

export default SuccessPinjamSTNK;
