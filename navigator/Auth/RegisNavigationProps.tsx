import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from './RegisParams';
import { RouteProp } from '@react-navigation/native';

export type RegisNavigationProps = NativeStackNavigationProp<
  AuthStackParamList,
  'RegisterByEmail'
>;

export type RegisByEmailRouteProps = RouteProp<
  AuthStackParamList,
  'RegisterByEmail'
>;
