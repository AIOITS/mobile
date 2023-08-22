import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../components/BackgroundWithHeader';
import IconTextInputField from '../../../components/Input/IconTextInputField';
import { Icon } from '@rneui/themed';
import TextInputField from '../../../components/Input/TextInputField';
import ButtonBlueComponent from '../../../components/Button/ButtonBlueComponent';
import { useNavigation } from '@react-navigation/native';
import { KendaraanNavigationProps } from '../../../navigator/Kendaraan/KendaraanNavigationProps';

const TambahSTNK = () => {
  const tw = useTailwind();
  const [owner, setOwner] = useState<string>('');
  const navigation = useNavigation<KendaraanNavigationProps>();

  return (
    <BackgroundWithHeader
      header="Tambah STNK"
      subHeader="Pastikan data sesuai"
      backButton
      main
      bell>
      {/* form start */}
      <View style={[tw('flex flex-col'), { gap: 5 }]}>
        <View style={[tw('flex flex-col'), { gap: 7 }]}>
          <Text style={tw('text-cape-storm text-sm font-light')}>
            Nomor Polisi
          </Text>
          <IconTextInputField
            placeholder="A 1234 AA"
            right>
            <Icon
              name="checkcircle"
              type="antdesign"
              size={20}
              color={'#00A0F3'}
            />
          </IconTextInputField>
        </View>
        <TextInputField
          label="Nama Pemilik"
          labelStyle="font-light"
          placeholder="Tiara Asa"
          value={owner}
          onChangeValue={setOwner}
        />
      </View>
      {/* form end */}

      {/* button start */}
      <View style={tw('bottom-0 left-0 absolute right-0')}>
        <ButtonBlueComponent
          buttonTitle="Lanjutkan"
          onNavigationClick={() => navigation.navigate('SuccessTambahSTNK')}
        />
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default TambahSTNK;
