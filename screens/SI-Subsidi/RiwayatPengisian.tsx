import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundLargeHeader from '../../components/BackgroundLargeHeader';
import { useNavigation } from '@react-navigation/native';
import { SubsidiNavigationProps } from '../../navigator/Subsidi/SubsidiNavigationProps';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import TextInputField from '../../components/Input/TextInputField';
import { Icon } from '@rneui/themed';
import InfoPengisianBox from '../../components/Box/InfoPengisianBox';
import IconTextInputField from '../../components/Input/IconTextInputField';

const RiwayatPengisian = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SubsidiNavigationProps>();
  const [search, setSearch] = useState<string>('');

  return (
    <BackgroundLargeHeader
      header="Riwayat Pengisian"
      backButton
      onBackClick={() => navigation.goBack()}
      bell
      main
      subHeader="Riwayat Pengisian BBM"
      backgroundImageSource={require('../../assets/bg/bg-medium.png')}>
      {/* info start */}
      <View style={tw('flex flex-row justify-between items-center')}>
        <InfoBlockDisplay
          title="Honda Vario 150"
          subTitle="L 1150 CC"
          gap={2}
          titleStyle="text-disable text-xs"
          subTitleStyle="text-cape-storm font-bold text-xl"
        />
        <InfoBlockDisplay
          title="Penggunaan Subsidi"
          subTitle="25 L"
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
          data={[
            {
              title: 'SPBU Surabaya Soetomo',
              date: '10 Oktober 2022',
              volume: '1.9L',
              subsidi: true,
            },
            {
              title: 'SPBU Surabaya Soetomo',
              date: '10 Oktober 2022',
              volume: '1.9L',
              subsidi: false,
            },
          ]}
        />
      </View>
      {/* riwayat end */}
    </BackgroundLargeHeader>
  );
};

export default RiwayatPengisian;
