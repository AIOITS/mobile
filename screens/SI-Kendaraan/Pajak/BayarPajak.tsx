import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import Pembayaran from '../../../components/Pembayaran/Pembayaran';
import { useNavigation } from '@react-navigation/native';
import { KendaraanNavigationProps } from '../../../navigator/Kendaraan/KendaraanNavigationProps';

const BayarPajak = () => {
  const tw = useTailwind();
  const navigation = useNavigation<KendaraanNavigationProps>();

  return (
    <Pembayaran
      onButtonClick={() => navigation.navigate('SuccessBayarPajak')}
    />
  );
};

export default BayarPajak;
