import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../components/BackgroundWithHeader';
import StepCircleIndicator from '../../../components/Indicator/StepCircleIndicator';
import Jadwal from '../../../components/Tes/Jadwal';
import { useNavigation } from '@react-navigation/native';
import { SIMBaruNavigationProp } from '../../../navigator/Identitas/SIMBaruNavigationProp';
import useStepIndicator from '../../../hooks/useStepIndicator';

const data = [
  'Jenis SIM',
  'Pembayaran',
  'Ujian Teori',
  'Tes Psiologi',
  'Jadwal Praktik',
];

const JadwalPraktik = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SIMBaruNavigationProp>();
  const { title, state } = useStepIndicator(data, 4);

  return (
    <BackgroundWithHeader
      header="Pengambilan SIM"
      subHeader="Isi data untuk pengambilan SIM"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      <StepCircleIndicator data={{ title, state }} />

      <Jadwal onNavigationClick={() => navigation.navigate('SuccessSIMBaru')} />
    </BackgroundWithHeader>
  );
};

export default JadwalPraktik;
