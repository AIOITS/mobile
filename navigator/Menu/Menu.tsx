import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabScreenParamList, TabStackParamList } from '../BottomNavigator';
import { MenuParamList, NotifyStackParamList } from '../RootNavigator';

export type MenuScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Home'>,
  NativeStackNavigationProp<MenuParamList>
>;

export type BottomTabNavProp = BottomTabNavigationProp<
  TabStackParamList,
  'Home'
>;

export type NotifyNavigationProps = NativeStackNavigationProp<
  NotifyStackParamList,
  'Notification'
>;
