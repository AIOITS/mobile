import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { PerpanjangSIMNavigationProp } from '../../../../navigator/Identitas/PerpanjangSIMNavigationProp';
import useStepIndicator from '../../../../hooks/useStepIndicator';
import StepCircleIndicator from '../../../../components/Indicator/StepCircleIndicator';
import ButtonComponent from '../../../../components/Button/ButtonComponent';
import Instruksi from '../../../../components/Tes/Instruksi';

const data = ['Pembayaran', 'Tes Psikologi', 'Pengambilan'];

const InstruksiTPPerpanjangSIM = () => {
  const tw = useTailwind();
  const navigation = useNavigation<PerpanjangSIMNavigationProp>();
  const { title, state } = useStepIndicator(data, 1);

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
          onNavigationClick={() => navigation.navigate('SoalTPPerpanjangSIM')}
        />
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default InstruksiTPPerpanjangSIM;
