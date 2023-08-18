import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisByEmail from '../screens/Regis/RegisByEmail';
import RegisByPhone from '../screens/Regis/RegisByPhone';
import OTPScreen from '../screens/OTP/OTPScreen';
import SuccessScreen from '../screens/Success/SuccessScreen';
import LoginByEmail from '../screens/Login/LoginByEmail';
import LoginByPhone from '../screens/Login/LoginByPhone';
import NotActivated from '../screens/Aktivasi/NotActivated';

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
  return (
    <RootStack.Navigator>
      {/* for auth */}
      <RootStack.Group>
        <RootStack.Screen
          options={{
            headerShown: false,
            animation: 'none',
          }}
          name="RegisterByEmail"
          component={RegisByEmail}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
            animation: 'none',
          }}
          name="RegisterByPhone"
          component={RegisByPhone}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
            presentation: 'containedModal',
          }}
          name="OTP"
          component={OTPScreen}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
            presentation: 'containedModal',
          }}
          name="RegisterSuccess"
          component={SuccessScreen}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
            animation: 'none',
          }}
          name="LoginByEmail"
          component={LoginByEmail}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
            animation: 'none',
          }}
          name="LoginByPhone"
          component={LoginByPhone}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
            presentation: 'containedModal',
          }}
          name="NotActivated"
          component={NotActivated}
        />
      </RootStack.Group>
      {/* <RootStack.Group>
      </RootStack.Group> */}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
