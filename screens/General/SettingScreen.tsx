import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import ButtonComponent from '../../components/Button/ButtonComponent';
import { useTailwind } from 'tailwind-rn';
import { useAuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { RegisNavigationProps } from '../../navigator/Auth/RegisNavigationProps';
import useUserandSTNK from '../../hooks/General/useUserandSTNK';

const SettingScreen = () => {
  const tw = useTailwind();
  const auth = useAuthContext();
  const navigation = useNavigation<RegisNavigationProps>();
  const id = auth.user?.id;

  const { loading, error, user } = useUserandSTNK(id as number);

  const handleLogout = () => {
    auth.SignOut();
    navigation.navigate('LoginByEmail');
  };

  return (
    <BackgroundWithHeader
      header="Pengaturan"
      subHeader="Pengaturan aplikasi"
      bell
      main>
      <View style={[tw('flex flex-row'), { gap: 15 }]}>
        <View style={[tw('flex flex-col'), { gap: 10 }]}>
          <Text style={tw('text-cape-storm font-semibold text-base')}>NIK</Text>
          <Text style={tw('text-cape-storm font-semibold text-base')}>
            Username
          </Text>
          <Text style={tw('text-cape-storm font-semibold text-base')}>
            Email
          </Text>
        </View>
        <View style={[tw('flex flex-col'), { gap: 10 }]}>
          <Text style={tw('text-cape-storm font-semibold text-base')}>
            : {user.nik}
          </Text>
          <Text style={tw('text-cape-storm font-semibold text-base')}>
            : {user.name}
          </Text>
          <Text style={tw('text-cape-storm font-semibold text-base')}>
            : {user.email}
          </Text>
        </View>
      </View>
      <View style={[tw('w-full absolute'), { bottom: 100 }]}>
        <ButtonComponent
          buttonTitle="Logout"
          onNavigationClick={() => {
            handleLogout();
          }}
        />
      </View>
    </BackgroundWithHeader>
  );
};

export default SettingScreen;
