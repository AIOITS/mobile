import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { KendaraanNavigationProps } from '../../../navigator/Kendaraan/KendaraanNavigationProps';
import StepCircleIndicator from '../../../components/Indicator/StepCircleIndicator';
import useStepIndicator from '../../../hooks/useStepIndicator';
import TextInputField from '../../../components/Input/TextInputField';
import IconTextInputField from '../../../components/Input/IconTextInputField';
import { Icon } from '@rneui/themed';
import ButtonComponent from '../../../components/Button/ButtonComponent';

const data = ['Pembayaran', 'Cek Kendaraan'];

const CekKendaraan = () => {
  const tw = useTailwind();
  const navigation = useNavigation<KendaraanNavigationProps>();
  const { title, state } = useStepIndicator(data, 1);
  const [samsat, setSamsat] = useState<string>('');
  const [tanggal, setTanggal] = useState<string>('');

  return (
    <BackgroundWithHeader
      header="Cek Kendaraan"
      subHeader="Pilih lokasi dan waktu cek fisik kendaraan"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      <StepCircleIndicator data={{ title, state }} />

      <TextInputField
        label="SAMSAT Terdekat"
        placeholder="SAMSAT di sekitar"
        onChangeValue={(value) => setSamsat(value)}
        value={samsat}
      />

      <View style={[tw('flex flex-col'), { gap: 7 }]}>
        <Text style={tw('')}>Tanggal</Text>
        <IconTextInputField
          right
          placeholder="Pilih tanggal pengecekan">
          <Icon
            name="calendar-alt"
            type="font-awesome-5"
            size={20}
            color={'#00A0F3'}
          />
        </IconTextInputField>
      </View>

      <View style={tw('absolute bottom-3 w-full')}>
        <ButtonComponent
          buttonTitle="Jadwalkan"
          onNavigationClick={() => navigation.navigate('SuccessGantiPlat')}
        />
      </View>
    </BackgroundWithHeader>
  );
};

export default CekKendaraan;
