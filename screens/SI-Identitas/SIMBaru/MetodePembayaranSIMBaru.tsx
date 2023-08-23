import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import { SIMBaruNavigationProp } from '../../../navigator/Identitas/SIMBaruNavigationProp';
import useStepIndicator from '../../../hooks/useStepIndicator';
import MetodePembayaran from '../../../components/Pembayaran/MetodePembayaran';

const data = [
  'Jenis SIM',
  'Pembayaran',
  'Ujian Teori',
  'Tes Psiologi',
  'Jadwal Praktik',
];

const MetodePembayaranSIMBaru = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SIMBaruNavigationProp>();
  const { title, state } = useStepIndicator(data, 1);

  return (
    <MetodePembayaran
      step
      data={{ title, state }}
      onButtonClick={() => navigation.navigate('BayarSIMBaru')}
    />
  );
};

export default MetodePembayaranSIMBaru;
