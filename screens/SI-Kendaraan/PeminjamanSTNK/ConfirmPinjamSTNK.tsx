import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../components/BackgroundWithHeader';
import {
  ConfirmPinjamSTNKRouteProp,
  KendaraanNavigationProps,
} from '../../../navigator/Kendaraan/KendaraanNavigationProps';
import { useNavigation, useRoute } from '@react-navigation/native';
import PersonSVG from '../../../assets/person.svg';
import InfoBlockDisplay from '../../../components/Info/InfoBlockDisplay';
import IconTextInputField from '../../../components/Input/IconTextInputField';
import { Icon } from '@rneui/themed';
import ButtonComponent from '../../../components/Button/ButtonComponent';

const ConfirmPinjamSTNK = () => {
  const tw = useTailwind();
  const navigation = useNavigation<KendaraanNavigationProps>();
  const {
    params: { nama, alamat },
  } = useRoute<ConfirmPinjamSTNKRouteProp>();

  return (
    <BackgroundWithHeader
      header="Pinjamkan STNK"
      subHeader="Konfirmasi peminjaman STNK"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      {/* content start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        <View style={tw('rounded-full items-center justify-center')}>
          <PersonSVG height={150} />
        </View>
        <InfoBlockDisplay
          title="Nama"
          subTitle={nama}
          titleStyle="text-xs text-disable"
          subTitleStyle="text-sm text-cape-storm capitalize"
          gap={1}
        />
        <InfoBlockDisplay
          title="Alamat"
          subTitle={alamat}
          titleStyle="text-xs text-disable"
          subTitleStyle="text-sm text-cape-storm capitalize"
          gap={1}
        />
      </View>
      {/* content end */}

      {/* calendar start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        <Text style={tw('font-light text-cape-storm')}>
          Batas Waktu Peminjaman
        </Text>
        <IconTextInputField
          placeholder="Pilih batas waktu peminjaman"
          right>
          <TouchableOpacity>
            <Icon
              name="calendar-alt"
              type="font-awesome-5"
              size={20}
              color={'#00A0F3'}
            />
          </TouchableOpacity>
        </IconTextInputField>
      </View>
      {/* calendar end */}

      {/* button start */}
      <View style={[tw('flex flex-row absolute bottom-3'), { gap: 10 }]}>
        <View style={{ width: '48%' }}>
          <ButtonComponent
            buttonTitle="Tolak"
            color="bg-strong-pink"
            onNavigationClick={() => navigation.goBack()}
          />
        </View>
        <View style={{ width: '48%' }}>
          <ButtonComponent
            buttonTitle="Setujui"
            onNavigationClick={() => navigation.navigate('SuccessPinjamSTNK')}
          />
        </View>
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default ConfirmPinjamSTNK;
