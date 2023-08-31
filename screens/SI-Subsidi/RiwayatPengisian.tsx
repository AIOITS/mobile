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
          title={`${params.tipe} ${params.merk} ${params.nomor_rangka}`}
          subTitle={params.nomor_mesin}
          gap={2}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-cape-storm font-bold text-xl"
        />
        <InfoBlockDisplay
          title="Penggunaan Subsidi"
          subTitle={params.isi_silinder.toString() + ' L'}
          gap={2}
          titleStyle="text-right text-disable text-xs"
          subTitleStyle="text-right text-cape-storm font-bold text-xl"
        />
      </View>
      {/* info end */}

      {/* search start */}
      <IconTextInputField
        placeholderStyle="text-base"
        filter
        placeholder="Cari data pengisian">
        <Icon
          name={'search'}
          type="feather"
          size={25}
          color="gray"
        />
      </IconTextInputField>
      {/* search end */}

      {/* riwayat start */}
      <View
        style={[tw('flex flex-col items-start justify-center'), { gap: 5 }]}>
        <InfoPengisianBox
          month="Oktober"
          data={[...params.history_pengisian]}
        />
      </View>
      {/* riwayat end */}
    </BackgroundWithHeader>
  );
};

export default RiwayatPengisian;
