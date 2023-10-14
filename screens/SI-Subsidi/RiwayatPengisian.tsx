import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  RiwayatPengisianRouteProp,
  SubsidiNavigationProps,
} from '../../navigator/Subsidi/SubsidiNavigationProps';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import TextInputField from '../../components/Input/TextInputField';
import { Icon } from '@rneui/themed';
import InfoPengisianBox from '../../components/Box/InfoPengisianBox';
import IconTextInputField from '../../components/Input/IconTextInputField';

const RiwayatPengisian = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SubsidiNavigationProps>();
  const [search, setSearch] = useState<string>('');

  const { params } = useRoute<RiwayatPengisianRouteProp>();

  let calculate = params.history_pengisian.reduce((a, b) => {
    return a + b.jumlah;
  }, 0);

  console.log('calculate===============');
  console.log(calculate);

  return (
    <BackgroundWithHeader
      header="Riwayat Pengisian"
      backButton
      onBackClick={() => navigation.goBack()}
      bell
      main
      subHeader="Riwayat Pengisian BBM">
      {/* info start */}
      <View style={tw('flex flex-row justify-between items-center')}>
        <InfoBlockDisplay
          title={`${params.merk} ${params.model}`}
          subTitle={params.nomor_polisi}
          gap={2}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-cape-storm font-bold text-xl"
        />
        <InfoBlockDisplay
          title="Penggunaan Subsidi"
          subTitle={calculate.toFixed(2) + ' L'}
          gap={2}
          titleStyle="text-right text-disable text-xs"
          subTitleStyle="text-right text-cape-storm font-bold text-xl"
        />
      </View>
      {/* info end */}

      {/* search start */}
      <IconTextInputField
        placeholderStyle="text-base"
        placeholder="Cari data pengisian">
        <Icon
          name={'search'}
          type="feather"
          size={25}
          color="gray"
        />
      </IconTextInputField>
      {/* search end */}

      {/* date start */}
      <View
        style={[tw('flex flex-row items-start justify-between'), { gap: 5 }]}>
        <View style={[{ width: '48%' }]}>
          <IconTextInputField
            placeholderStyle="text-base"
            placeholder="Tanggal Mulai">
            <Icon
              name={'search'}
              type="feather"
              size={25}
              color="gray"
            />
          </IconTextInputField>
        </View>
        <View style={[{ width: '48%' }]}>
          <IconTextInputField
            placeholderStyle="text-base"
            placeholder="Tanggal Mulai">
            <Icon
              name={'search'}
              type="feather"
              size={25}
              color="gray"
            />
          </IconTextInputField>
        </View>
      </View>
      {/* date end */}

      {/* riwayat start */}
      <View
        style={[tw('flex flex-col items-start justify-center'), { gap: 5 }]}>
        <InfoPengisianBox
          month="Oktober"
          data={[
            ...params.history_pengisian.sort((a, b) => {
              return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
              );
            }),
          ]}
        />
      </View>
      {/* riwayat end */}
    </BackgroundWithHeader>
  );
};

export default RiwayatPengisian;
