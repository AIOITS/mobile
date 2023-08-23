import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { PerpanjangSIMNavigationProp } from '../../../../navigator/Identitas/PerpanjangSIMNavigationProp';
import OptionWithStatusIndicator from '../../../../components/Info/OptionWithStatusIndicator';
import ButtonIcon from '../../../../components/Button/ButtonIcon';
import { Icon } from '@rneui/themed';

const SoalTPPerpanjangSIM = () => {
  const tw = useTailwind();
  const navigation = useNavigation<PerpanjangSIMNavigationProp>();
  const numberOfTexts = 30;
  const texts = Array.from({ length: numberOfTexts }, (_, index) => index + 1);

  return (
    <BackgroundWithHeader
      header="Tes Psikologi"
      subHeader="Silahkan baca instruksi pengerjaan"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      {/* time start */}
      <View style={tw('items-center justify-center')}>
        <Text
          style={tw('bg-golden px-2 py-1 rounded-md text-white font-semibold')}>
          14:59
        </Text>
      </View>
      {/* time end */}

      {/* number start */}
      <View
        style={[
          tw('flex flex-row items-center flex-wrap justify-around'),
          { gap: 3 },
        ]}>
        {texts.map((text, index) => (
          <TouchableOpacity key={index}>
            <Text
              style={[
                tw('bg-disable rounded-md text-center py-1 text-white'),
                { width: 30 },
              ]}>
              {text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* number end */}

      {/* soal start */}
      <Text style={tw('text-cape-storm font-normal text-sm')}>
        Saya sering emosi ketika diklakson pengendara lain
      </Text>
      {/* soal end */}

      {/* answer start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        <View
          style={[
            tw('border-disable px-2 py-3 rounded-lg'),
            { borderWidth: 1 },
          ]}>
          <OptionWithStatusIndicator
            title="Ya"
            notdivider
          />
        </View>
        <View
          style={[
            tw('border-disable px-2 py-3 rounded-lg'),
            { borderWidth: 1 },
          ]}>
          <OptionWithStatusIndicator
            title="Tidak"
            notdivider
          />
        </View>
      </View>
      {/* answer end */}

      {/* button start */}
      <View
        style={tw(
          'flex flex-row justify-between w-full items-center absolute bottom-0',
        )}>
        <View style={{ width: '47%' }}>
          <ButtonIcon
            titleButton="Sebelumnya"
            titleButtonStyle="text-white font-semibold"
            customButton="bg-primary-light-blue">
            <Icon
              name="keyboard-arrow-left"
              type="material"
              size={20}
              color={'white'}
            />
          </ButtonIcon>
        </View>
        <View style={{ width: '47%' }}>
          <ButtonIcon
            onButtonClick={() => navigation.navigate('HasilTPPerpanjangSIM')}
            titleButton="Selanjutnya"
            titleButtonStyle="text-white font-semibold"
            customButton="bg-primary-light-blue"
            right>
            <Icon
              name="keyboard-arrow-right"
              type="material"
              size={20}
              color={'white'}
            />
          </ButtonIcon>
        </View>
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default SoalTPPerpanjangSIM;
