import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { PerpanjangSIMNavigationProp } from '../../../navigator/Identitas/PerpanjangSIMNavigationProp';
import useStepIndicator from '../../../hooks/useStepIndicator';
import StepCircleIndicator from '../../../components/Indicator/StepCircleIndicator';
import IconTextInputField from '../../../components/Input/IconTextInputField';
import { Icon } from '@rneui/themed';
import ButtonIcon from '../../../components/Button/ButtonIcon';
import TextInputField from '../../../components/Input/TextInputField';
import ButtonComponent from '../../../components/Button/ButtonComponent';

const data = ['Pembayaran', 'Tes Psikologi', 'Pengambilan'];

const PengambilanSIM = () => {
  const tw = useTailwind();
  const navigation = useNavigation<PerpanjangSIMNavigationProp>();
  const { title, state } = useStepIndicator(data, 2);
  const [satpas, setSatpas] = useState<string>('');

  return (
    <BackgroundWithHeader
      header="Pengambilan SIM"
      subHeader="Isi data untuk pengambilan SIM"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      <StepCircleIndicator data={{ title, state }} />

      {/* note start */}
      <Text style={tw('text-white bg-golden p-3 text-center rounded-lg')}>
        Surat keterangan sehat jasmani dan rohani bisa didapat dari Puskesmas
        terdekat
      </Text>
      {/* note end */}

      {/* form start */}
      <View style={[tw('flex flex-col'), { gap: 7 }]}>
        <TextInputField
          label="Satpas SIM Terdekat"
          placeholder="Satpas di sekitar"
          value={satpas}
          onChangeValue={(value) => setSatpas(value)}
        />
        <View style={[tw('flex flex-col my-2'), { gap: 7 }]}>
          <Text style={tw('')}>Tanggal</Text>
          <IconTextInputField
            right
            placeholder="Pilih tanggal perpanjang SIM">
            <Icon
              name="calendar-alt"
              type="font-awesome-5"
              size={20}
              color={'#00A0F3'}
            />
          </IconTextInputField>
        </View>
        <View style={[tw('flex flex-col my-2'), { gap: 7 }]}>
          <Text style={tw('text-cape-storm')}>Dokumen pendukung</Text>
          <ButtonIcon titleButton="Tambahkan file">
            <Icon
              name={'upload'}
              type="font-awesome"
              size={25}
              color="#00A0F3"
            />
          </ButtonIcon>
        </View>
      </View>
      {/* form end */}

      {/* button start */}
      <View style={tw('absolute bottom-0 w-full')}>
        <ButtonComponent
          buttonTitle="Selanjutnya"
          onNavigationClick={() => navigation.navigate('SuccessPerpanjangSIM')}
        />
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default PengambilanSIM;
