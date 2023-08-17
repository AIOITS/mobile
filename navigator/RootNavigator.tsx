import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisByEmail from '../screens/Regis/RegisByEmail';
import RegisByPhone from '../screens/Regis/RegisByPhone';
import OtpScreen from '../screens/OTP/OtpScreen';

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
          }}
          name="RegisterByEmail"
          component={RegisByEmail}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="RegisterByPhone"
          component={RegisByPhone}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="OTP"
          component={OtpScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
