import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../../components/BackgroundWithHeader';
import Soal from '../../../../components/Tes/Soal';
import { useNavigation } from '@react-navigation/native';
import { SIMBaruNavigationProp } from '../../../../navigator/Identitas/SIMBaruNavigationProp';

const SoalUTSIMBaru = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SIMBaruNavigationProp>();

  return (
    <BackgroundWithHeader
      header="Ujian Teori"
      subHeader="Pilih jawaban yang tepat"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      <Soal
        nextNavigation={() => navigation.navigate('HasilUTSIMBaru')}
        prevNavigation={() => navigation.goBack()}
      />
    </BackgroundWithHeader>
  );
};

export default SoalUTSIMBaru;
