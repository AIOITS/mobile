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
import AjukanSubsidi from '../screens/SI-Subsidi/AjukanSubsidi';
import SuccessAjukanSubsidi from '../screens/SI-Subsidi/SuccessAjukanSubsidi';
import RiwayatPengajuan from '../screens/SI-Subsidi/RiwayatPengajuan';
import DetailRiwayatPengajuan from '../screens/SI-Subsidi/DetailRiwayatPengajuan';
import NotifyScreen from '../screens/Notif/NotifyScreen';
import Identitas from '../screens/SI-Identitas/Identitas';
import DetailSim from '../screens/SI-Identitas/DetailSim';

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

export type NotifyStackParamList = {
  Notification: undefined;
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

export type IdentitasStackParamList = {
  Identitas: undefined;
  DetailSim: undefined;
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
        <RootStack.Screen
          name="AjukanSubsidi"
          component={AjukanSubsidi}
        />
        <RootStack.Screen
          name="SuccessAjukanSubsidi"
          component={SuccessAjukanSubsidi}
        />
        <RootStack.Screen
          name="RiwayatPengajuan"
          component={RiwayatPengajuan}
        />
        <RootStack.Screen
          name="DetailRiwayatPengajuan"
          component={DetailRiwayatPengajuan}
        />
      </RootStack.Group>

      {/* for notif */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Notification"
          component={NotifyScreen}
        />
      </RootStack.Group>

      {/* for si-identitas */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Identitas"
          component={Identitas}
        />
        <RootStack.Screen
          name="DetailSim"
          component={DetailSim}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
