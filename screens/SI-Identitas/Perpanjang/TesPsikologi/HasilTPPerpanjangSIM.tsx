import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { PerpanjangSIMNavigationProp } from '../../../../navigator/Identitas/PerpanjangSIMNavigationProp';
import ButtonComponent from '../../../../components/Button/ButtonComponent';
import Hasil from '../../../../components/Tes/Hasil';

const HasilTPPerpanjangSIM = () => {
  const tw = useTailwind();
  const navigation = useNavigation<PerpanjangSIMNavigationProp>();

  return (
    <BackgroundWithHeader
      header="Hasil Tes Psikologi"
      subHeader="Hasil tes yang telah dilakukan"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      <Hasil
        title="Selamat, anda lulus tes psikologi"
        subTitle="Silahkan lanjutkan untuk melakukan jadwal tes praktik"
      />
      <View style={tw('absolute bottom-0 w-full')}>
        <ButtonComponent
          buttonTitle="Selanjutnya"
          onNavigationClick={() => navigation.navigate('PengambilanSIM')}
        />
      </View>
    </BackgroundWithHeader>
  );
};

export default HasilTPPerpanjangSIM;
