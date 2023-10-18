import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { RegisNavigationProps } from '../../navigator/Auth/RegisNavigationProps';
import BackgroundWithHeader from '../BackgroundWithHeader';
import TextInputField from '../Input/TextInputField';
import { Button, Divider } from '@rneui/themed';
import { AuthScreenParamList } from '../../navigator/Auth/RegisParams';
import ButtonComponent from '../Button/ButtonComponent';
import ButtonOutlineComponent from '../Button/ButtonOutlineComponent';
import register from '../../api/rest/Auth/register';
import login from '../../api/rest/Auth/login';
import { useAuthContext } from '../../contexts/Auth/AuthContext';
import validateEmail from '../../utils/validateEmail';
import validatePhone from '../../utils/validatePhone';
import Loading from '../Indicator/Loading';
import { BottomTabNavProp } from '../../navigator/Menu/Menu';

interface AuthComponentProps {
  header: string;
  subHeader: string;
  title: string;
  placeholder: string;
  navigateToOne: AuthScreenParamList;
  navigateToTwo: AuthScreenParamList;
  register?: boolean;
}

const AuthComponent = ({
  title,
  placeholder,
  register,
  navigateToOne,
  navigateToTwo,
  header,
  subHeader,
}: AuthComponentProps) => {
  const tw = useTailwind();
  const [NIK, setNIK] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigation = useNavigation<RegisNavigationProps>();
  const menu_navigation = useNavigation<BottomTabNavProp>();
  const route = useRoute();
  const isEmailActive = route.name === navigateToOne;
  const isPhoneActive = route.name === navigateToTwo;
  const auth = useAuthContext();

  useEffect(() => {
    return () => {
      setInput('');
      setPassword('');
      setErrorMessage('');
    };
  }, []);

  const handleRegister = async () => {
    try {
      const regis = await auth.Register({
        email: isEmailActive ? input : undefined,
        phone: isEmailActive ? undefined : input,
        password,
        nik: NIK,
      });
      if (regis) {
        setErrorMessage(regis.message);
      } else {
        navigation.navigate('OTP');
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message.toString());
      } else {
        setErrorMessage('An error occurred during registration.');
      }
    }
  };

  const handleLogin = async () => {
    try {
      const user = await auth.SignIn({
        email: isEmailActive ? input : undefined,
        phone: isEmailActive ? undefined : input,
        password,
      });
      // TODO: redirect to home screen
      if (user.statusCode === 200) {
        menu_navigation.navigate('Main');
      } else if ('message' in user) {
        setErrorMessage(user.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message.toString());
      } else {
        setErrorMessage('An error occurred during login.');
      }
    }
  };

  if (auth.isLoading) {
    return <Loading />;
  }

  return (
    <BackgroundWithHeader
      header={header}
      subHeader={subHeader}>
      {/* navigation start */}
      <View
        style={tw(
          'bg-secondary-white mb-4 flex flex-row items-center justify-evenly w-full rounded-lg p-1 mt-6',
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
        {errorMessage.includes('NIK') && (
          <Text style={tw('text-red text-xs')}>{errorMessage}</Text>
        )}
        <TextInputField
          label={title}
          placeholder={placeholder}
          value={input}
          onChangeValue={(text) => setInput(text)}
        />
        {errorMessage !== '' && !errorMessage.includes('NIK') && (
          <Text style={tw('text-red text-xs')}>{errorMessage}</Text>
        )}
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
      <View style={tw('flex bottom-3 absolute left-0 right-0 flex-col')}>
        {/* button bottom */}
        {register ? (
          <ButtonComponent
            onNavigationClick={() => {
              if (input == '' && password == '' && NIK == '') {
                setErrorMessage('Mohon isi semua kolom.');
              } else {
                handleRegister();
              }
            }}
            buttonTitle="Buat Akun"
          />
        ) : (
          <ButtonComponent
            disable={password == '' || input == ''}
            onNavigationClick={() => {
              if (password == '' || input == '') {
                setErrorMessage('Mohon isi semua kolom.');
              } else {
                handleLogin();
              }
            }}
            buttonTitle="Masuk"
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
          <ButtonOutlineComponent
            buttonTitle="Masuk"
            onNavigationClick={() => {
              navigation.navigate('LoginByEmail');
            }}
          />
        ) : (
          <ButtonOutlineComponent
            buttonTitle="Daftar"
            onNavigationClick={() => {
              navigation.navigate('RegisterByEmail');
            }}
          />
        )}
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default AuthComponent;
