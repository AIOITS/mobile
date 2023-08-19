import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundLargeHeader from '../../components/BackgroundLargeHeader';
import { useNavigation } from '@react-navigation/native';
import { SubsidiNavigationProps } from '../../navigator/Subsidi/SubsidiNavigationProps';
import InfoBlockDisplay from '../../components/Info/InfoBlockDisplay';
import TextInputField from '../../components/Input/TextInputField';
import { Icon } from '@rneui/themed';

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
      <View>
        <View style={tw('flex flex-row justify-center items-center')}>
          <View style={tw('absolute z-10 left-3')}>
            <Icon
              name={'search'}
              type="feather"
              size={25}
              color="gray"
            />
          </View>
          <TextInput
            placeholder="Cari data pengisian"
            style={tw(
              'bg-secondary-white border-2 flex-1 border-disable py-2 rounded-lg px-4 pl-12 text-base',
            )}
          />
          <View style={tw('ml-3')}>
            <Icon
              name={'filter'}
              type="font-awesome-5"
              size={25}
              color="#00A0F3"
            />
          </View>
        </View>
      </View>
      {/* search end */}

      {/* riwayat start */}
      <View
        style={[tw('flex flex-col items-start justify-center'), { gap: 5 }]}>
        <View
          style={[[tw('flex flex-col items-start justify-start'), { gap: 3 }]]}>
          <Text style={tw('text-lg text-cape-storm font-semibold')}>
            Oktober
          </Text>
          <View
            style={[
              tw('flex flex-row items-center justify-start w-full'),
              { gap: 8 },
            ]}>
            <Text
              style={tw(
                'bg-primary-light-blue text-xs rounded-md p-1 text-white font-light',
              )}>
              Non Subsidi
            </Text>
            <InfoBlockDisplay
              title="SPBU Surabaya Soetomo"
              subTitle="10 Oktober 2022"
              titleStyle="text-cape-storm text-base"
              subTitleStyle="text-cape-storm text-xs font-normal"
              gap={1}
            />
            <Text style={tw('text-lg text-right flex-1')}>1.9 L</Text>
          </View>
        </View>
      </View>
      {/* riwayat end */}
    </BackgroundLargeHeader>
  );
};

export default RiwayatPengisian;
