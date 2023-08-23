import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import MetodePembayaran from '../../../components/Pembayaran/MetodePembayaran';
import { useNavigation } from '@react-navigation/native';
import { KendaraanNavigationProps } from '../../../navigator/Kendaraan/KendaraanNavigationProps';

const MetodeBayarPajak = () => {
  const tw = useTailwind();
  const navigation = useNavigation<KendaraanNavigationProps>();

  return (
    <MetodePembayaran onButtonClick={() => navigation.navigate('BayarPajak')} />
  );
};

export default MetodeBayarPajak;
