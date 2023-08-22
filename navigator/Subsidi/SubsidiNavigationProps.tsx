import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SubsidiStackParamList } from './SubsidiParams';
import { RouteProp } from '@react-navigation/native';

export type SubsidiNavigationProps = NativeStackNavigationProp<
  SubsidiStackParamList,
  'Subsidi'
>;

export type DetailRiwayatPengajuanRouteProp = RouteProp<
  SubsidiStackParamList,
  'DetailRiwayatPengajuan'
>;
