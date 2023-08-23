import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../../components/BackgroundWithHeader';
import StepCircleIndicator from '../../../../components/Indicator/StepCircleIndicator';
import Instruksi from '../../../../components/Tes/Instruksi';
import ButtonComponent from '../../../../components/Button/ButtonComponent';
import useStepIndicator from '../../../../hooks/useStepIndicator';
import { useNavigation } from '@react-navigation/native';
import { SIMBaruNavigationProp } from '../../../../navigator/Identitas/SIMBaruNavigationProp';

const data = [
  'Jenis SIM',
  'Pembayaran',
  'Ujian Teori',
  'Tes Psiologi',
  'Jadwal Praktik',
];

const InstruksiTPSIMBaru = () => {
  const tw = useTailwind();
  const { title, state } = useStepIndicator(data, 3);
  const navigation = useNavigation<SIMBaruNavigationProp>();

  return (
    <BackgroundWithHeader
      header="Tes Psikologi"
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
      <View style={tw('absolute bottom-0 w-full')}>
        <ButtonComponent
          buttonTitle="Mulai Tes Psikologi"
          onNavigationClick={() => navigation.navigate('SoalTPSIMBaru')}
        />
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default InstruksiTPSIMBaru;
