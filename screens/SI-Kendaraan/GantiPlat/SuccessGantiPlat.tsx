import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import ConfirmMessage from '../../../components/Info/ConfirmMessage';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { MenuScreenNavigationProp } from '../../../navigator/Menu/Menu';

const SuccessGantiPlat = () => {
  const navigation = useNavigation<MenuScreenNavigationProp>();

  return (
    <ConfirmMessage
      onNavigationClick={() => navigation.navigate('Home')}
      titleButton="Kembali ke Beranda"
      header="Cek Kendaraan telah dijadwalkan"
      subHeader="Pengecekan akan dilaksanakan pada 14 Desember 2022 di SAMSAT Manyar Surabaya Timur. Silahkan bawa kendaraan Anda dan surat-suratnya">
      <Icon
        name="checkcircle"
        type="antdesign"
        size={80}
        color={'white'}
      />
    </ConfirmMessage>
  );
};

export default SuccessGantiPlat;
