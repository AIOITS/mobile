import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { PerpanjangSIMNavigationProp } from '../../../../navigator/Identitas/PerpanjangSIMNavigationProp';
import ButtonComponent from '../../../../components/Button/ButtonComponent';
import { Icon } from '@rneui/themed';

const HasilTesPsikologi = () => {
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
      <View
        style={[
          tw('flex flex-col rounded-lg bg-primary-light-blue p-5'),
          { gap: 10 },
        ]}>
        <Icon
          name="checkcircle"
          type="antdesign"
          size={80}
          color={'white'}
        />
        <Text style={tw('text-white font-bold text-lg text-center')}>
          Selamat, anda lulus tes psikologi
        </Text>
        <Text style={tw('text-white text-base text-center font-normal')}>
          Silahkan lanjutkan untuk melakukan jadwal tes praktik
        </Text>
      </View>
      <View style={tw('absolute bottom-0 w-full')}>
        <ButtonComponent
          buttonTitle="Selanjutnya"
          onNavigationClick={() => navigation.navigate('PengambilanSIM')}
        />
      </View>
    </BackgroundWithHeader>
  );
};

export default HasilTesPsikologi;
