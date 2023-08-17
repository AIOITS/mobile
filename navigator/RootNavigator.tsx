import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisByEmail from '../screens/Regis/RegisByEmail';
import RegisByPhone from '../screens/Regis/RegisByPhone';
import OTPScreen from '../screens/OTP/OTPScreen';
import SuccessScreen from '../screens/Success/SuccessScreen';

const RootStack = createNativeStackNavigator();

export type RegisterStackParamList = {
  RegisterByEmail: undefined;
  RegisterByPhone: undefined;
  OTP: undefined;
  RegisterSuccess: undefined;
};

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      {/* for daftar */}
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
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
