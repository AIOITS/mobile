import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PdfStackParamList } from './PdfParams';
import { RouteProp } from '@react-navigation/native';

export type PdfNavigationProps = RouteProp<PdfStackParamList, 'Pdf'>;

export type PdfNavigationStack = NativeStackNavigationProp<
  PdfStackParamList,
  'Pdf'
>;
