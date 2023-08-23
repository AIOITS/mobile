import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { KendaraanStackParamList } from './KendaraanParams';
import { RouteProp } from '@react-navigation/native';

export type KendaraanNavigationProps = NativeStackNavigationProp<
  KendaraanStackParamList,
  'Kendaraan'
>;

export type ConfirmPinjamSTNKRouteProp = RouteProp<
  KendaraanStackParamList,
  'ConfirmPinjamSTNK'
>;

export type DetailRiwayatSTNKRouteProp = RouteProp<
  KendaraanStackParamList,
  'DetailRiwayatSTNK'
>;

export type MetodeBayarGantiPlatRouteProp = RouteProp<
  KendaraanStackParamList,
  'MetodeBayarGantiPlat'
>;

export type BayarGantiPlatRouteProp = RouteProp<
  KendaraanStackParamList,
  'BayarGantiPlat'
>;
