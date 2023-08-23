import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import Pembayaran from '../../../components/Pembayaran/Pembayaran';
import { useNavigation } from '@react-navigation/native';
import { KendaraanNavigationProps } from '../../../navigator/Kendaraan/KendaraanNavigationProps';
import useStepIndicator from '../../../hooks/useStepIndicator';

const data = ['Pembayaran', 'Cek Kendaraan'];

const BayarGantiPlat = () => {
  const tw = useTailwind();
  const navigation = useNavigation<KendaraanNavigationProps>();
  const { title, state } = useStepIndicator(data, 0);

  return (
    <Pembayaran
      step
      data={{ title, state }}
      onButtonClick={() => navigation.navigate('CekKendaraan')}
    />
  );
};

export default BayarGantiPlat;
