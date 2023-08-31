import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IdentitasStackParamList } from './IdentitasParams';
import { RouteProp } from '@react-navigation/native';

export type IdentitasNavigationProps = NativeStackNavigationProp<
  IdentitasStackParamList,
  'Identitas'
>;

export type DetailSIMRouteProp = RouteProp<
  IdentitasStackParamList,
  'DetailSim'
>;
