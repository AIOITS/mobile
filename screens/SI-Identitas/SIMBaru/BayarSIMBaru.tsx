import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import useStepIndicator from '../../../hooks/useStepIndicator';
import { SIMBaruNavigationProp } from '../../../navigator/Identitas/SIMBaruNavigationProp';
import Pembayaran from '../../../components/Pembayaran/Pembayaran';

const data = [
  'Jenis SIM',
  'Pembayaran',
  'Ujian Teori',
  'Tes Psiologi',
  'Jadwal Praktik',
];

const BayarSIMBaru = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SIMBaruNavigationProp>();
  const { title, state } = useStepIndicator(data, 1);

  return (
    <Pembayaran
      step
      data={{ title, state }}
      onButtonClick={() => navigation.navigate('InstruksiUTSIMBaru')}
    />
  );
};

export default BayarSIMBaru;
