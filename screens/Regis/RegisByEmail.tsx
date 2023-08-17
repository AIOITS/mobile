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

const RegisByEmail = () => {
  const tw = useTailwind();
  const [NIK, setNIK] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const navigation = useNavigation<RegisByEmailNavigationProps>();

  return (
    <View style={tw('bg-white flex-1')}>
      <ImageBackground
        source={require('../../assets/bg/bg-large.png')}
        style={[
          tw('absolute left-0 top-0'),
          { height: screenHeight, width: screenWidth },
        ]}
        imageStyle={{
          resizeMode: 'cover',
          alignSelf: 'flex-end',
        }}>
        <View
          style={tw(
            'mx-3 pt-8 flex-1 flex flex-col items-stretch justify-between',
          )}>
          <View style={tw('my-3')}>
            <Text style={tw('text-3xl text-white font-bold')}>Daftar</Text>
            <Text style={tw('text-sm text-white')}>
              Pastikan data diri sesuai
            </Text>
          </View>

          <View
            style={tw(
              'bg-secondary-white mb-4 flex flex-row items-center justify-evenly w-full rounded-lg p-1',
            )}>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterByEmail')}
              style={[
                tw(
                  'bg-breonne-blue flex flex-row items-stretch justify-center rounded-lg py-2',
                ),
                { width: '50%' },
              ]}>
              <Text style={tw('text-white font-bold')}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterByPhone')}
              style={[
                tw('flex flex-row items-stretch justify-center'),
                { width: '50%' },
              ]}>
              <Text>Nomor Telepon</Text>
            </TouchableOpacity>
          </View>

          {/* form input start */}
          <View style={tw('my-14')}>
            <TextInputField
              label="NIK"
              placeholder="12345"
              value={NIK}
              onChangeValue={(text) => setNIK(text)}
            />
            <TextInputField
              label="Email"
              placeholder="Example@gmail.com"
              value={email}
              onChangeValue={(text) => setEmail(text)}
            />
            <TextInputField
              label="Email"
              placeholder="Example@gmail.com"
              value={password}
              onChangeValue={(text) => setPassword(text)}
              isPassword
            />
          </View>
          {/* form input end */}

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
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegisByEmail;
