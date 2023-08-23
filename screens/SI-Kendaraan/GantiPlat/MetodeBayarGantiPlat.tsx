import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import MetodePembayaran from '../../../components/Pembayaran/MetodePembayaran';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  KendaraanNavigationProps,
  MetodeBayarGantiPlatRouteProp,
} from '../../../navigator/Kendaraan/KendaraanNavigationProps';
import useStepIndicator from '../../../hooks/useStepIndicator';

const data = ['Pembayaran', 'Cek Kendaraan'];

const MetodeBayarGantiPlat = () => {
  const tw = useTailwind();
  const navigation = useNavigation<KendaraanNavigationProps>();
  const { title, state } = useStepIndicator(data, 0);

  return (
    <MetodePembayaran
      step
      data={{ title, state }}
      onButtonClick={() => navigation.navigate('BayarGantiPlat')}
    />
  );
};

export default MetodeBayarGantiPlat;
