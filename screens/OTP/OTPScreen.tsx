import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundLargeHeader from '../../components/BackgroundLargeHeader';
import BoxInputField from '../../components/Input/BoxInputField';
import { useNavigation } from '@react-navigation/native';
import { RegisNavigationProps } from '../../navigator/Auth/RegisNavigationProps';
import ButtonBlueComponent from '../../components/Button/ButtonBlueComponent';

const OTPScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<RegisNavigationProps>();

  return (
    <BackgroundLargeHeader
      backButton
      onBackClick={() => navigation.goBack()}
      header="OTP"
      subHeader="Silahkan masukkan kode OTP yang telah dikirimkan"
      backgroundImageSource={require('../../assets/bg/bg-medium-2.png')}>
      <View style={tw('flex flex-col my-auto')}>
        {/* sending start */}
        <View style={tw('items-center mb-7')}>
          <Text>Kode verifikasi dikirimkan ke</Text>
          <Text style={tw('font-bold')}>tiarasa@gmail.com</Text>
        </View>
        {/* sending end */}

        {/* otp start */}
        <View
          style={[
            tw('flex flex-row items-stretch justify-around mb-7'),
            { gap: 1 },
          ]}>
          <BoxInputField />
          <BoxInputField />
          <BoxInputField />
          <BoxInputField />
        </View>
        {/* otp end */}

        {/* re-send code start */}
        <View style={tw('flex flex-row items-start')}>
          <Text style={tw('mr-1')}>Belum mendapat kode?</Text>
          <TouchableOpacity>
            <Text style={tw('font-bold text-primary-light-blue')}>
              Kirim ulang kode
            </Text>
          </TouchableOpacity>
        </View>
        {/* re-send code end */}
      </View>

      {/* button start */}
      <View style={tw('bottom-0 left-0 absolute right-0')}>
        <ButtonBlueComponent
          buttonTitle="Lanjutkan"
          onNavigationClick={() => navigation.navigate('RegisterSuccess')}
        />
      </View>
      {/* button end */}
    </BackgroundLargeHeader>
  );
};

export default OTPScreen;
