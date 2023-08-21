import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import BackgroundLargeHeader from '../../components/BackgroundLargeHeader';
import ButtonBlueComponent from '../../components/Button/ButtonBlueComponent';
import ButtonOutlineComponent from '../../components/Button/ButtonOutlineComponent';
import { useTailwind } from 'tailwind-rn';
import MotorcycleSVG from '../../assets/motorcycle.svg';
import { useNavigation } from '@react-navigation/native';
import { SubsidiNavigationProps } from '../../navigator/Subsidi/SubsidiNavigationProps';
import CardElevation from '../../components/Card/CardElevation';

const Subsidi = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SubsidiNavigationProps>();

  return (
    <BackgroundLargeHeader
      header="Si Subsidi"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell
      subHeader="Pengelolaan subsidi tepat guna"
      backgroundImageSource={require('../../assets/bg/bg-medium.png')}>
      {/* button start */}
      <View
        style={[tw('flex flex-row items-stretch justify-between'), { gap: 5 }]}>
        <ButtonOutlineComponent
          buttonTitle="Riwayat Ajuan"
          onNavigationClick={() => navigation.navigate('RiwayatPengajuan')}
          width={'px-7'}
          height={'py-3'}
        />
        <ButtonBlueComponent
          buttonTitle="Ajukan Subsidi"
          width={'px-7'}
          height={'py-3.5'}
          onNavigationClick={() => navigation.navigate('AjukanSubsidi')}
        />
      </View>
      {/* button end */}

      {/* riwayat start */}
      <View style={tw('flex flex-col justify-center items-stretch')}>
        <CardElevation
          cardStyle="flex flex-row justify-between items-stretch w-full px-3 py-4"
          elevation={2}>
          <MotorcycleSVG height={100} />
          <View style={[tw('flex flex-col justify-center'), { gap: 5 }]}>
            <Text style={tw('text-disable text-xs')}>Honda Vario 125</Text>
            <Text style={tw('text-cape-storm font-bold text-lg')}>
              L 1150 CC
            </Text>
            <ButtonOutlineComponent
              buttonTitle="Riwayat Pengisian"
              onNavigationClick={() => navigation.navigate('RiwayatPengisian')}
              width={'px-4'}
              height={'py-2.5'}
            />
          </View>
        </CardElevation>
      </View>
      {/* riwayat end */}
    </BackgroundLargeHeader>
  );
};

export default Subsidi;
