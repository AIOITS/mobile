import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { PerpanjangSIMNavigationProp } from '../../../../navigator/Identitas/PerpanjangSIMNavigationProp';
import Soal from '../../../../components/Tes/Soal';

const SoalTPPerpanjangSIM = () => {
  const tw = useTailwind();
  const navigation = useNavigation<PerpanjangSIMNavigationProp>();

  return (
    <BackgroundWithHeader
      header="Tes Psikologi"
      subHeader="Silahkan baca instruksi pengerjaan"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      <Soal
        nextNavigation={() => navigation.navigate('HasilTPPerpanjangSIM')}
        prevNavigation={() => navigation.goBack()}
      />
    </BackgroundWithHeader>
  );
};

export default SoalTPPerpanjangSIM;
