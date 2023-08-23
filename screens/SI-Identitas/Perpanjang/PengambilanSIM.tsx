import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { PerpanjangSIMNavigationProp } from '../../../navigator/Identitas/PerpanjangSIMNavigationProp';
import useStepIndicator from '../../../hooks/useStepIndicator';
import StepCircleIndicator from '../../../components/Indicator/StepCircleIndicator';
import Jadwal from '../../../components/Tes/Jadwal';

const data = ['Pembayaran', 'Tes Psikologi', 'Pengambilan'];

const PengambilanSIM = () => {
  const tw = useTailwind();
  const navigation = useNavigation<PerpanjangSIMNavigationProp>();
  const { title, state } = useStepIndicator(data, 2);

  return (
    <BackgroundWithHeader
      header="Pengambilan SIM"
      subHeader="Isi data untuk pengambilan SIM"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      <StepCircleIndicator data={{ title, state }} />

      <Jadwal
        onNavigationClick={() => navigation.navigate('SuccessPerpanjangSIM')}
      />
    </BackgroundWithHeader>
  );
};

export default PengambilanSIM;
