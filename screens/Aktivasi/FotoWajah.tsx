import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { ActivateNavigationProps } from '../../navigator/Auth/RegisNavigationProps';
import useStepIndicator from '../../hooks/useStepIndicator';
import StepCircleIndicator from '../../components/Indicator/StepCircleIndicator';
import ButtonIcon from '../../components/Button/ButtonIcon';
import { Icon } from '@rneui/themed';
import Instruksi from '../../components/Tes/Instruksi';
import ButtonComponent from '../../components/Button/ButtonComponent';

const data = ['Foto KTP', 'Foto Wajah', 'Validasi'];

const instruksi = [
  {
    num: 'a',
    text: 'Wajah memenuhi 80 persen frame foto atau close-up',
  },
  {
    num: 'b',
    text: 'Area wajah terlihat jelas tanpa menggunakan aksesori seperti kacamata, masker, topi, dan lain-lain',
  },
  {
    num: 'c',
    text: 'Foto diambil disertai foto KTP',
  },
  {
    num: 'd',
    text: 'Pastikan wajah dan KTP terlihat dengan jelas',
  },
];

const FotoWajah = () => {
  const tw = useTailwind();
  const navigation = useNavigation<ActivateNavigationProps>();
  const { title, state } = useStepIndicator(data, 1);

  return (
    <BackgroundWithHeader
      header="Aktivasi"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell
      subHeader="Silahkan foto ktp anda">
      <StepCircleIndicator data={{ title, state }} />

      <Instruksi soal={instruksi} />

      <View
        style={[
          { width: 130 },
          tw('items-center justify-center w-full mx-auto'),
        ]}>
        <ButtonIcon
          titleButton="Ambil Foto"
          titleButtonStyle="text-white font-semibold text-sm"
          customButton="bg-primary-light-blue">
          <Icon
            name="camera"
            type="entypo"
            size={20}
            color={'white'}
          />
        </ButtonIcon>
      </View>

      <View style={tw('absolute bottom-3 right-0 left-0')}>
        <ButtonComponent
          buttonTitle="Lanjutkan"
          onNavigationClick={() => navigation.navigate('Validate')}
        />
      </View>
    </BackgroundWithHeader>
  );
};

export default FotoWajah;
