import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import { SIMBaruNavigationProp } from '../../../../navigator/Identitas/SIMBaruNavigationProp';
import useStepIndicator from '../../../../hooks/useStepIndicator';
import BackgroundWithHeader from '../../../../components/BackgroundWithHeader';
import StepCircleIndicator from '../../../../components/Indicator/StepCircleIndicator';
import Instruksi from '../../../../components/Tes/Instruksi';
import ButtonComponent from '../../../../components/Button/ButtonComponent';

const data = [
  'Jenis SIM',
  'Pembayaran',
  'Ujian Teori',
  'Tes Psiologi',
  'Jadwal Praktik',
];

const InstruksiUTSIMBaru = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SIMBaruNavigationProp>();
  const { title, state } = useStepIndicator(data, 2);

  return (
    <BackgroundWithHeader
      header="Ujian Teori"
      subHeader="Silahkan baca instruksi pengerjaan"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      <StepCircleIndicator data={{ title, state }} />

      {/* instruksi start */}
      <Instruksi />
      {/* instruksi end */}

      {/* button start */}
      <View style={tw('absolute bottom-3 w-full')}>
        <ButtonComponent
          buttonTitle="Mulai Ujian Teori"
          onNavigationClick={() => navigation.navigate('SoalUTSIMBaru')}
        />
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default InstruksiUTSIMBaru;
