import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../../components/BackgroundWithHeader';
import Hasil from '../../../../components/Tes/Hasil';
import ButtonComponent from '../../../../components/Button/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { SIMBaruNavigationProp } from '../../../../navigator/Identitas/SIMBaruNavigationProp';

const HasilUTSIMBaru = () => {
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
        title="Selamat, anda lulus ujian teori"
        subTitle="Silahkan lanjutkan untuk melakukan tes psikologi"
      />
      <View style={tw('absolute bottom-0 w-full')}>
        <ButtonComponent
          buttonTitle="Selanjutnya"
          onNavigationClick={() => navigation.navigate('InstruksiTPSIMBaru')}
        />
      </View>
    </BackgroundWithHeader>
  );
};

export default HasilUTSIMBaru;
