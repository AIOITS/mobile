import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RegisterStackParamList } from '../RootNavigator';
import { RouteProp } from '@react-navigation/native';

export type RegisByEmailNavigationProps = NativeStackNavigationProp<
  RegisterStackParamList,
  'RegisterByEmail'
>;

export type RegisByEmailRouteProps = RouteProp<
  RegisterStackParamList,
  'RegisterByEmail'
>;
