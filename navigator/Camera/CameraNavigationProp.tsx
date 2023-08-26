import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CameraParamList } from './CameraParams';

export type CameraNavigationProp = NativeStackNavigationProp<
  CameraParamList,
  'Camera'
>;
