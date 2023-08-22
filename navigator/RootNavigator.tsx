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
import Kendaraan from '../screens/SI-Kendaraan/Kendaraan';
import DetailSTNK from '../screens/SI-Kendaraan/DetailSTNK';
import TambahSTNK from '../screens/SI-Kendaraan/TambahSTNK/TambahSTNK';
import SuccessTambahSTNK from '../screens/SI-Kendaraan/TambahSTNK/SuccessTambahSTNK';
import PinjamkanSTNK from '../screens/SI-Kendaraan/PeminjamanSTNK/PinjamkanSTNK';
import ConfirmPinjamSTNK from '../screens/SI-Kendaraan/PeminjamanSTNK/ConfirmPinjamSTNK';
import SuccessPinjamSTNK from '../screens/SI-Kendaraan/PeminjamanSTNK/SuccessPinjamSTNK';
import RiwayatPinjamSTNK from '../screens/SI-Kendaraan/PeminjamanSTNK/RiwayatPinjamSTNK';
import DetailRiwayatSTNK from '../screens/SI-Kendaraan/PeminjamanSTNK/DetailRiwayatSTNK';

const RootStack = createNativeStackNavigator();

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

      {/* for si-kendaraan */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Kendaraan"
          component={Kendaraan}
        />
        <RootStack.Screen
          name="DetailSTNK"
          component={DetailSTNK}
        />
        <RootStack.Screen
          name="TambahSTNK"
          component={TambahSTNK}
        />
        <RootStack.Screen
          name="SuccessTambahSTNK"
          component={SuccessTambahSTNK}
        />
        <RootStack.Screen
          name="PinjamkanSTNK"
          component={PinjamkanSTNK}
        />
        <RootStack.Screen
          name="ConfirmPinjamSTNK"
          component={ConfirmPinjamSTNK}
        />
        <RootStack.Screen
          name="SuccessPinjamSTNK"
          component={SuccessPinjamSTNK}
        />
        <RootStack.Screen
          name="RiwayatPinjamSTNK"
          component={RiwayatPinjamSTNK}
        />
        <RootStack.Screen
          name="DetailRiwayatSTNK"
          component={DetailRiwayatSTNK}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
