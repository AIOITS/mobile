import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import { PerpanjangSIMNavigationProp } from '../../../navigator/Identitas/PerpanjangSIMNavigationProp';
import useStepIndicator from '../../../hooks/useStepIndicator';
import Pembayaran from '../../../components/Pembayaran/Pembayaran';

const data = ['Pembayaran', 'Tes Psikologi', 'Pengambilan'];

const BayarPerpanjangSIM = () => {
  const tw = useTailwind();
  const navigation = useNavigation<PerpanjangSIMNavigationProp>();
  const { title, state } = useStepIndicator(data, 0);

  return (
    <Pembayaran
      step
      data={{ title, state }}
      onButtonClick={() => navigation.navigate('InstruksiTesPsikologi')}
    />
  );
};

export default BayarPerpanjangSIM;
