import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { RegisByEmailNavigationProps } from '../../navigator/Register/RegisByEmailNavigationProps';
import BackgroundLargeHeader from '../BackgroundLargeHeader';
import TextInputField from '../TextInputField';
import { Button, Divider } from '@rneui/themed';
import { AuthScreenParamList } from '../../navigator/RootNavigator';

interface AuthScreenProps {
  header: string;
  subHeader: string;
  title: string;
  placeholder: string;
  navigateToOne: AuthScreenParamList;
  navigateToTwo: AuthScreenParamList;
  register?: boolean;
}

const AuthScreen = ({
  title,
  placeholder,
  register,
  navigateToOne,
  navigateToTwo,
  header,
  subHeader,
}: AuthScreenProps) => {
  const tw = useTailwind();
  const [NIK, setNIK] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<RegisByEmailNavigationProps>();
  const route = useRoute();
  const isEmailActive = route.name === navigateToOne;
  const isPhoneActive = route.name === navigateToTwo;

  return (
    <BackgroundLargeHeader
      header={header}
      subHeader={subHeader}
      backgroundImageSource={require('../../assets/bg/bg-large.png')}>
      {/* navigation start */}
      <View
        style={tw(
          `bg-secondary-white mb-4 flex flex-row items-center justify-evenly w-full rounded-lg p-1 ${
            register ? 'mt-0' : '-mt-12'
          }`,
        )}>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigateToOne)}
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
          onPress={() => navigation.navigate(navigateToTwo)}
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
        {register && (
          <TextInputField
            label="NIK"
            placeholder="12345"
            value={NIK}
            onChangeValue={(text) => setNIK(text)}
          />
        )}
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
      <View style={tw('flex bottom-0 left-0 self-end flex-col')}>
        {/* button bottom */}
        {register ? (
          <Button
            onPress={() => navigation.navigate('OTP')}
            title="Buat Akun"
            buttonStyle={tw('bg-primary-light-blue rounded-lg py-2')}
          />
        ) : (
          <Button
            onPress={() => navigation.navigate('NotActivated')}
            title="Masuk"
            buttonStyle={tw('bg-primary-light-blue rounded-lg py-2')}
          />
        )}

        {/* divider */}
        <View style={tw('my-5 flex flex-row justify-center items-center')}>
          <Text
            style={tw(
              'text-center text-disable absolute -mt-2 bg-white z-10 px-2',
            )}>
            {register ? 'Sudah punya akun?' : 'Belum punya akun?'}
          </Text>
          <Divider
            color="gray"
            style={tw('w-full')}
          />
        </View>

        {/* button bottom */}
        {register ? (
          <Button
            onPress={() => navigation.navigate('LoginByEmail')}
            title="Masuk"
            buttonStyle={tw(
              'bg-secondary-white rounded-lg border-primary-light-blue border-2 py-2',
            )}
            type="outline"
            titleStyle={tw('text-primary-light-blue')}
          />
        ) : (
          <Button
            onPress={() => navigation.navigate('RegisterByEmail')}
            title="Daftar"
            buttonStyle={tw(
              'bg-secondary-white rounded-lg border-primary-light-blue border-2 py-2',
            )}
            type="outline"
            titleStyle={tw('text-primary-light-blue')}
          />
        )}
      </View>
      {/* button end */}
    </BackgroundLargeHeader>
  );
};

export default AuthScreen;
