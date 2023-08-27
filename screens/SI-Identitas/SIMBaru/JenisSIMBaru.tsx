import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { SIMBaruNavigationProp } from '../../../navigator/Identitas/SIMBaruNavigationProp';
import useStepIndicator from '../../../hooks/useStepIndicator';
import StepCircleIndicator from '../../../components/Indicator/StepCircleIndicator';
import SIM_A_SVG from '../../../assets/kartu/sim-a.svg';
import SIM_B1_SVG from '../../../assets/kartu/sim-b1.svg';
import SIM_B2_SVG from '../../../assets/kartu/sim-b2.svg';
import CardElevation from '../../../components/Card/CardElevation';
import ButtonComponent from '../../../components/Button/ButtonComponent';

const data = [
  'Jenis SIM',
  'Pembayaran',
  'Ujian Teori',
  'Tes Psiologi',
  'Jadwal Praktik',
];

const JenisSIMBaru = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SIMBaruNavigationProp>();
  const { title, state } = useStepIndicator(data, 0);
  const [isCardClicked, setCardClicked] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const handleCardClick = (index: number) => {
    const updatedState = [false, false, false];
    updatedState[index] = !updatedState[index];
    setCardClicked(updatedState);
  };

  const cardStyle = isCardClicked ? 'border-primary-light-blue border-2' : '';

  return (
    <BackgroundWithHeader
      main
      backButton
      onBackClick={() => navigation.goBack()}
      header="Si Identitas"
      subHeader="Smart SIM Identitas"
      bell>
      <StepCircleIndicator data={{ title, state }} />

      <View
        style={[
          tw('flex flex-col border-primary-light-blue mb-10'),
          { gap: 15 },
        ]}>
        {/* sim a */}
        <CardElevation
          cardStyle={
            isCardClicked[0] ? 'border-primary-light-blue border-2' : ''
          }
          onCardClick={() => handleCardClick(0)}>
          <SIM_A_SVG width={'100%'} />
        </CardElevation>

        {/* sim b1 */}
        <CardElevation
          cardStyle={
            isCardClicked[1] ? 'border-primary-light-blue border-2' : ''
          }
          onCardClick={() => handleCardClick(1)}>
          <SIM_B1_SVG width={'100%'} />
        </CardElevation>

        {/* sim b2 */}
        <CardElevation
          cardStyle={
            isCardClicked[2] ? 'border-primary-light-blue border-2' : ''
          }
          onCardClick={() => handleCardClick(2)}>
          <SIM_B2_SVG width={'100%'} />
        </CardElevation>

        <View style={tw('w-full')}>
          <ButtonComponent
            disable={!isCardClicked.includes(true)}
            buttonTitle="Lanjutkan"
            onNavigationClick={() => {
              if (isCardClicked.includes(true)) {
                navigation.navigate('MetodePembayaranSIMBaru');
              }
            }}
          />
        </View>
      </View>
    </BackgroundWithHeader>
  );
};

export default JenisSIMBaru;
