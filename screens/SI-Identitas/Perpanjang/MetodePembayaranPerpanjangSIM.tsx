import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import MetodePembayaran from '../../../components/Pembayaran/MetodePembayaran';
import { useNavigation } from '@react-navigation/native';
import { PerpanjangSIMNavigationProp } from '../../../navigator/Identitas/PerpanjangSIMNavigationProp';
import useStepIndicator from '../../../hooks/useStepIndicator';

const data = ['Pembayaran', 'Tes Psikologi', 'Pengambilan'];

const MetodePembayaranPerpanjangSIM = () => {
  const tw = useTailwind();
  const navigation = useNavigation<PerpanjangSIMNavigationProp>();
  const { title, state } = useStepIndicator(data, 0);

  return (
    <MetodePembayaran
      step
      data={{ title, state }}
      onButtonClick={() => navigation.navigate('BayarPerpanjangSIM')}
    />
  );
};

export default MetodePembayaranPerpanjangSIM;
