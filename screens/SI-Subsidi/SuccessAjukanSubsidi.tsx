import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import ConfirmMessage from '../../components/Info/ConfirmMessage';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavProp } from '../../navigator/Menu/Menu';

const SuccessAjukanSubsidi = () => {
  const tw = useTailwind();
  const navigation = useNavigation<BottomTabNavProp>();

  return (
    <ConfirmMessage
      onNavigationClick={() => navigation.navigate('Home')}
      titleButton="Kembali ke Beranda"
      header="Pengajuan Subsidi Telah Dilakukan"
      subHeader="Pengajuan dalam tahap proses. Jika ajuan diterima, maka jumlah subsidi akan ditambahkan">
      <Icon
        name="checkcircle"
        type="antdesign"
        size={80}
        color={'white'}
      />
    </ConfirmMessage>
  );
};

export default SuccessAjukanSubsidi;
