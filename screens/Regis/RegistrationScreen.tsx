import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import { Button, Divider } from '@rneui/themed';
import TextInputField from '../../components/TextInputField';
import { RegisByEmailNavigationProps } from '../../navigator/Register/RegisByEmailNavigationProps';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import BackgroundLargeHeader from '../../components/BackgroundLargeHeader';

interface RegistrationScreenProps {
  title: string;
  placeholder: string;
}

const RegistrationScreen = ({
  title,
  placeholder,
}: RegistrationScreenProps) => {
  const tw = useTailwind();
  const [NIK, setNIK] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const navigation = useNavigation<RegisByEmailNavigationProps>();
  const route = useRoute();
  const isEmailActive = route.name === 'RegisterByEmail';
  const isPhoneActive = route.name === 'RegisterByPhone';

  return (
    <BackgroundLargeHeader
      header="Daftar"
      subHeader="Pastikan data diri sesuai"
      backgroundImageSource={require('../../assets/bg/bg-large.png')}>
      {/* navigation start */}
      <View
        style={tw(
          'bg-secondary-white mb-4 flex flex-row items-center justify-evenly w-full rounded-lg p-1',
        )}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterByEmail')}
          style={[
            tw(
              `flex flex-row items-stretch justify-center ${
                isEmailActive ? 'bg-breonne-blue rounded-lg py-2' : ''
              }`,
            ),
            { width: '50%' },
          ]}>
          <Text style={isEmailActive && tw('text-white font-bold')}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterByPhone')}
          style={[
            tw(
              `flex flex-row items-stretch justify-center ${
                isPhoneActive ? 'bg-breonne-blue rounded-lg py-2' : ''
              }`,
            ),
            { width: '50%' },
          ]}>
          <Text style={isPhoneActive && tw('text-white font-bold')}>
            Nomor Telepon
          </Text>
        </TouchableOpacity>
      </View>
      {/* navigation end */}

      {/* form input start */}
      <View style={tw('my-14')}>
        <TextInputField
          label="NIK"
          placeholder="12345"
          value={NIK}
          onChangeValue={(text) => setNIK(text)}
        />
        <TextInputField
          label={title}
          placeholder={placeholder}
          value={input}
          onChangeValue={(text) => setInput(text)}
        />
        <TextInputField
          label="Password"
          placeholder="Password"
          value={password}
          onChangeValue={(text) => setPassword(text)}
          isPassword
        />
      </View>
      {/* form input end */}

      {/* button start */}
      <View style={tw('flex flex-col bottom-0 left-0 self-end')}>
        {/* button bottom */}
        <Button
          onPress={() => navigation.navigate('OTP')}
          title="Buat Akun"
          buttonStyle={tw('bg-primary-light-blue rounded-lg py-2')}
        />

        {/* divider */}
        <View style={tw('my-5 flex flex-row justify-center items-center')}>
          <Text
            style={tw(
              'text-center text-disable absolute -mt-2 bg-white z-10 px-2',
            )}>
            Sudah punya akun?
          </Text>
          <Divider
            color="gray"
            style={tw('w-full')}
          />
        </View>

        {/* button bottom */}
        <Button
          title="Masuk"
          buttonStyle={tw(
            'bg-secondary-white rounded-lg border-primary-light-blue border-2 py-2',
          )}
          type="outline"
          titleStyle={tw('text-primary-light-blue')}
        />
      </View>
      {/* button end */}
    </BackgroundLargeHeader>
  );
};

export default RegistrationScreen;
