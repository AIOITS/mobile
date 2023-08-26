import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../../components/BackgroundWithHeader';
import Hasil from '../../../../components/Tes/Hasil';
import ButtonComponent from '../../../../components/Button/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { SIMBaruNavigationProp } from '../../../../navigator/Identitas/SIMBaruNavigationProp';

const HasilTPSIMBaru = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SIMBaruNavigationProp>();

  return (
    <BackgroundWithHeader
      header="Hasil Ujian Teori"
      subHeader="Hasil tes yang telah dilakukan"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      <Hasil
        title="Selamat, anda lulus tes psikologi"
        subTitle="Silahkan lanjutkan untuk melakukan jadwal tes praktik"
      />
      <View style={tw('absolute bottom-3 w-full')}>
        <ButtonComponent
          buttonTitle="Selanjutnya"
          onNavigationClick={() => navigation.navigate('JadwalPraktik')}
        />
      </View>
    </BackgroundWithHeader>
  );
};

export default HasilTPSIMBaru;
