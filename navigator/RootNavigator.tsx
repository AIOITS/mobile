import { View, Text } from 'react-native';
import React, { useState, lazy, useEffect } from 'react';
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
import MetodeBayarPajak from '../screens/SI-Kendaraan/Pajak/MetodeBayarPajak';
import BayarPajak from '../screens/SI-Kendaraan/Pajak/BayarPajak';
import SuccessBayarPajak from '../screens/SI-Kendaraan/Pajak/SuccessBayarPajak';
import MetodeBayarGantiPlat from '../screens/SI-Kendaraan/GantiPlat/MetodeBayarGantiPlat';
import BayarGantiPlat from '../screens/SI-Kendaraan/GantiPlat/BayarGantiPlat';
import SuccessGantiPlat from '../screens/SI-Kendaraan/GantiPlat/SuccessGantiPlat';
import CekKendaraan from '../screens/SI-Kendaraan/GantiPlat/CekKendaraan';
import MetodePembayaranPerpanjangSIM from '../screens/SI-Identitas/Perpanjang/MetodePembayaranPerpanjangSIM';
import BayarPerpanjangSIM from '../screens/SI-Identitas/Perpanjang/BayarPerpanjangSIM';
import InstruksiTPPerpanjangSIM from '../screens/SI-Identitas/Perpanjang/TesPsikologi/InstruksiTPPerpanjangSIM';
import SoalTPPerpanjangSIM from '../screens/SI-Identitas/Perpanjang/TesPsikologi/SoalTPPerpanjangSIM';
import HasilTPPerpanjangSIM from '../screens/SI-Identitas/Perpanjang/TesPsikologi/HasilTPPerpanjangSIM';
import PengambilanSIM from '../screens/SI-Identitas/Perpanjang/PengambilanSIM';
import SuccessPerpanjangSIM from '../screens/SI-Identitas/Perpanjang/SuccessPerpanjangSIM';
import JenisSIMBaru from '../screens/SI-Identitas/SIMBaru/JenisSIMBaru';
import MetodePembayaranSIMBaru from '../screens/SI-Identitas/SIMBaru/MetodePembayaranSIMBaru';
import BayarSIMBaru from '../screens/SI-Identitas/SIMBaru/BayarSIMBaru';
import InstruksiUTSIMBaru from '../screens/SI-Identitas/SIMBaru/UjianTeori/InstruksiUTSIMBaru';
import SoalUTSIMBaru from '../screens/SI-Identitas/SIMBaru/UjianTeori/SoalUTSIMBaru';
import HasilUTSIMBaru from '../screens/SI-Identitas/SIMBaru/UjianTeori/HasilUTSIMBaru';
import InstruksiTPSIMBaru from '../screens/SI-Identitas/SIMBaru/TesPsikologi/InstruksiTPSIMBaru';
import SoalTPSIMBaru from '../screens/SI-Identitas/SIMBaru/TesPsikologi/SoalTPSIMBaru';
import HasilTPSIMBaru from '../screens/SI-Identitas/SIMBaru/TesPsikologi/HasilTPSIMBaru';
import JadwalPraktik from '../screens/SI-Identitas/SIMBaru/JadwalPraktik';
import SuccessSIMBaru from '../screens/SI-Identitas/SIMBaru/SuccessSIMBaru';
import DashboardSiMoney from '../screens/SI-Money/DashboardSiMoney';
import MetodeTopUp from '../screens/SI-Money/TopUp/MetodeTopUp';
import NominalTopUp from '../screens/SI-Money/TopUp/NominalTopUp';
import BayarTopUp from '../screens/SI-Money/TopUp/BayarTopUp';
import SuccessTopUp from '../screens/SI-Money/TopUp/SuccessTopUp';
import CekSaldo from '../screens/SI-Money/CekSaldo';
import RiwayatSiMoney from '../screens/SI-Money/RiwayatSiMoney';
import FotoKTP from '../screens/Aktivasi/FotoKTP';
import FotoWajah from '../screens/Aktivasi/FotoWajah';
import Validasi from '../screens/Aktivasi/Validasi';
import SuccessValidasi from '../screens/Aktivasi/SuccessValidasi';
import Government from '../screens/SI-Gov/Government';
import CameraScreen from '../screens/Camera/CameraScreen';
import VideoScreen from '../screens/Camera/VideoScreen';
import { useAuthContext } from '../contexts/Auth/AuthContext';
import Loading from '../components/Indicator/Loading';
import PdfScreen from '../screens/Pdf/PdfScreen';
import Tilang from '../screens/SI-Tilang/Tilang';
import Terkini from '../screens/SI-Terkini/Terkini';
import Lalin from '../screens/SI-Lalin/Lalin';
import Edukasi from '../screens/SI-Edukasi/Edukasi';
import Laka from '../screens/SI-Laka/Laka';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [firstScreen, setFirstScreen] = useState<string>('');
  const auth = useAuthContext();

  useEffect(() => {
    // setIsLoggedIn(auth.isLoggedIn);
    const checkUserToken = async () => {
      const user_token = await auth.CheckToken();
      console.log(user_token);
      if (user_token) {
        setIsLoggedIn(true);
        setFirstScreen('Main');
      } else {
        setIsLoggedIn(false);
        setFirstScreen('RegisterByEmail');
      }
    };

    checkUserToken();
  }, []);

  return (
    <RootStack.Navigator initialRouteName={firstScreen}>
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
        <RootStack.Screen
          name="KTPPhoto"
          component={FotoKTP}
        />
        <RootStack.Screen
          name="FacePhoto"
          component={FotoWajah}
        />
        <RootStack.Screen
          name="Validate"
          component={Validasi}
        />
        <RootStack.Screen
          name="ValidateComplete"
          component={SuccessValidasi}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Main"
          component={BottomNavigator}
        />
      </RootStack.Group>
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
        <RootStack.Screen
          name="MetodePembayaranPajak"
          component={MetodeBayarPajak}
        />
        <RootStack.Screen
          name="BayarPajak"
          component={BayarPajak}
        />
        <RootStack.Screen
          name="SuccessBayarPajak"
          component={SuccessBayarPajak}
        />
        <RootStack.Screen
          name="MetodeBayarGantiPlat"
          initialParams={{ data: ['Pembayaran', 'Cek Kendaraan'] }}
          component={MetodeBayarGantiPlat}
        />
        <RootStack.Screen
          initialParams={{ data: ['Pembayaran', 'Cek Kendaraan'] }}
          name="BayarGantiPlat"
          component={BayarGantiPlat}
        />
        <RootStack.Screen
          name="SuccessGantiPlat"
          component={SuccessGantiPlat}
        />
        <RootStack.Screen
          name="CekKendaraan"
          component={CekKendaraan}
        />
      </RootStack.Group>

      {/* for perpanjang-sim */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="MetodePembayaranPerpanjangSIM"
          component={MetodePembayaranPerpanjangSIM}
        />
        <RootStack.Screen
          name="BayarPerpanjangSIM"
          component={BayarPerpanjangSIM}
        />
        <RootStack.Screen
          name="InstruksiTPPerpanjangSIM"
          component={InstruksiTPPerpanjangSIM}
        />
        <RootStack.Screen
          name="SoalTPPerpanjangSIM"
          component={SoalTPPerpanjangSIM}
        />
        <RootStack.Screen
          name="HasilTPPerpanjangSIM"
          component={HasilTPPerpanjangSIM}
        />
        <RootStack.Screen
          name="PengambilanSIM"
          component={PengambilanSIM}
        />
        <RootStack.Screen
          name="SuccessPerpanjangSIM"
          component={SuccessPerpanjangSIM}
        />
      </RootStack.Group>

      {/* for sim-baru */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="JenisSIMBaru"
          component={JenisSIMBaru}
        />
        <RootStack.Screen
          name="MetodePembayaranSIMBaru"
          component={MetodePembayaranSIMBaru}
        />
        <RootStack.Screen
          name="BayarSIMBaru"
          component={BayarSIMBaru}
        />
        <RootStack.Screen
          name="InstruksiUTSIMBaru"
          component={InstruksiUTSIMBaru}
        />
        <RootStack.Screen
          name="SoalUTSIMBaru"
          component={SoalUTSIMBaru}
        />
        <RootStack.Screen
          name="HasilUTSIMBaru"
          component={HasilUTSIMBaru}
        />
        <RootStack.Screen
          name="InstruksiTPSIMBaru"
          component={InstruksiTPSIMBaru}
        />
        <RootStack.Screen
          name="SoalTPSIMBaru"
          component={SoalTPSIMBaru}
        />
        <RootStack.Screen
          name="HasilTPSIMBaru"
          component={HasilTPSIMBaru}
        />
        <RootStack.Screen
          name="JadwalPraktik"
          component={JadwalPraktik}
        />
        <RootStack.Screen
          name="SuccessSIMBaru"
          component={SuccessSIMBaru}
        />
      </RootStack.Group>

      {/* for si-money */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Money"
          component={DashboardSiMoney}
        />
        <RootStack.Screen
          name="MetodeTopUp"
          component={MetodeTopUp}
        />
        <RootStack.Screen
          name="NominalTopUp"
          component={NominalTopUp}
        />
        <RootStack.Screen
          name="BayarTopUp"
          component={BayarTopUp}
        />
        <RootStack.Screen
          name="SuccessTopUp"
          component={SuccessTopUp}
        />
        <RootStack.Screen
          name="CekSaldo"
          component={CekSaldo}
        />
        <RootStack.Screen
          name="RiwayatSiMoney"
          component={RiwayatSiMoney}
        />
      </RootStack.Group>

      {/* for si-gov */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Government"
          component={Government}
        />
      </RootStack.Group>

      {/* for camera */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Camera"
          component={CameraScreen}
        />
        <RootStack.Screen
          name="Video"
          component={VideoScreen}
        />
      </RootStack.Group>

      {/* for si-tilang */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Tilang"
          component={Tilang}
        />
      </RootStack.Group>

      {/* for si-terkini */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Terkini"
          component={Terkini}
        />
      </RootStack.Group>

      {/* for si-lalin */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Lalin"
          component={Lalin}
        />
      </RootStack.Group>

      {/* for si-edukasi */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Edukasi"
          component={Edukasi}
        />
      </RootStack.Group>

      {/* for si-laka */}
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Laka"
          component={Laka}
        />
      </RootStack.Group>

      {/* for pdf */}
      {/* <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Pdf"
          component={PdfScreen}
        />
      </RootStack.Group> */}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
