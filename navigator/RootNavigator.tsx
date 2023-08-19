import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisByEmail from '../screens/Regis/RegisByEmail';
import RegisByPhone from '../screens/Regis/RegisByPhone';
import OTPScreen from '../screens/OTP/OTPScreen';
import SuccessScreen from '../screens/Success/SuccessScreen';
import LoginByEmail from '../screens/Login/LoginByEmail';
import LoginByPhone from '../screens/Login/LoginByPhone';
import NotActivated from '../screens/Aktivasi/NotActivated';
import BottomNavigator from './BottomNavigator';
import Subsidi from '../screens/SI-Subsidi/Subsidi';
import RiwayatPengisian from '../screens/SI-Subsidi/RiwayatPengisian';

const RootStack = createNativeStackNavigator();

export type AuthStackParamList = {
  RegisterByEmail: undefined;
  RegisterByPhone: undefined;
  OTP: undefined;
  RegisterSuccess: undefined;
  LoginByEmail: undefined;
  LoginByPhone: undefined;
  NotActivated: undefined;
};

export type ActivateStackParamList = {
  Activated: undefined;
  KTPPhoto: undefined;
  KTPPhotoWithImage: undefined;
  FacePhoto: undefined;
  FacePhotoWithImage: undefined;
  Validate: undefined;
  ValidateComplete: undefined;
};

export type SubsidiStackParamList = {
  Subsidi: undefined;
  RiwayatPengisian: undefined;
  AjukanSubsidi: undefined;
  SuccessAjukanSubsidi: undefined;
  RiwayatPengajuan: undefined;
  DetailRiwayatPengajuan: undefined;
};

export type MenuParamList = {
  Subsidi: undefined;
  Identitas: undefined;
  Tilang: undefined;
  Money: undefined;
  Laka: undefined;
  Lalin: undefined;
  Edukasi: undefined;
  Other: undefined;
};

export type MenuScreenParamList =
  | 'Subsidi'
  | 'Identitas'
  | 'Tilang'
  | 'Money'
  | 'Laka'
  | 'Lalin'
  | 'Edukasi'
  | 'Other';

export type SubsidiScreenParamList =
  | 'Subsidi'
  | 'RiwayatPengisian'
  | 'AjukanSubsidi'
  | 'SuccessAjukanSubsidi'
  | 'RiwayatPengajuan'
  | 'DetailRiwayatPengajuan';

export type AuthScreenParamList =
  | 'RegisterByEmail'
  | 'RegisterByPhone'
  | 'OTP'
  | 'RegisterSuccess'
  | 'LoginByEmail'
  | 'LoginByPhone'
  | 'NotActivated';

export type ActivatedScreenParamList =
  | 'Activated'
  | 'KTPPhoto'
  | 'KTPPhotoWithImage'
  | 'FacePhoto'
  | 'FacePhotoWithImage'
  | 'Validate'
  | 'ValidateComplete';

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  return (
    <RootStack.Navigator>
      {!isLoggedIn ? (
        // for auth
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen
            options={{
              animation: 'none',
            }}
            name="RegisterByEmail"
            component={RegisByEmail}
          />
          <RootStack.Screen
            options={{
              animation: 'none',
            }}
            name="RegisterByPhone"
            component={RegisByPhone}
          />
          <RootStack.Screen
            options={{
              presentation: 'containedModal',
            }}
            name="OTP"
            component={OTPScreen}
          />
          <RootStack.Screen
            options={{
              presentation: 'containedModal',
            }}
            name="RegisterSuccess"
            component={SuccessScreen}
          />
          <RootStack.Screen
            options={{
              animation: 'none',
            }}
            name="LoginByEmail"
            component={LoginByEmail}
          />
          <RootStack.Screen
            options={{
              animation: 'none',
            }}
            name="LoginByPhone"
            component={LoginByPhone}
          />
          <RootStack.Screen
            options={{
              presentation: 'containedModal',
            }}
            name="NotActivated"
            component={NotActivated}
          />
        </RootStack.Group>
      ) : (
        // for general
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen
            name="Main"
            component={BottomNavigator}
          />
        </RootStack.Group>
      )}

      {/* for subsidi */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Subsidi"
          component={Subsidi}
        />
        <RootStack.Screen
          name="RiwayatPengisian"
          component={RiwayatPengisian}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
