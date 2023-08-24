import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/General/HomeScreen';
import ServiceScreen from '../screens/General/ServiceScreen';
import HelpScreen from '../screens/General/HelpScreen';
import SettingScreen from '../screens/General/SettingScreen';
import EmergencyScreen from '../screens/General/EmergencyScreen';
import HomeSVG from '../assets/general/home.svg';
import HelpSVG from '../assets/general/help.svg';
import ServiceSVG from '../assets/general/service.svg';
import SettingSVG from '../assets/general/setting.svg';
import { Icon } from '@rneui/themed';

export type TabStackParamList = {
  Home: undefined;
  Service: undefined;
  Emergency: undefined;
  Help: undefined;
  Setting: undefined;
  Main: undefined;
};

export type TabScreenParamList =
  | 'Home'
  | 'Service'
  | 'Emergency'
  | 'Help'
  | 'Setting'
  | 'Main';

const Tab = createBottomTabNavigator<TabStackParamList>();

const BottomNavigator = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#00A0F3',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name == 'Home') {
            return (
              <Icon
                name="home"
                type="founation"
                color={focused ? '#00A0F3' : 'gray'}
              />
            );
          } else if (route.name == 'Service') {
            return (
              <Icon
                name="compass"
                type="font-awesome-5"
                color={focused ? '#00A0F3' : 'gray'}
              />
            );
          } else if (route.name == 'Help') {
            return (
              <Icon
                name="help-with-circle"
                type="entypo"
                color={focused ? '#00A0F3' : 'gray'}
              />
            );
          } else if (route.name == 'Setting') {
            return (
              <Icon
                name="settings-sharp"
                type="ionicon"
                color={focused ? '#00A0F3' : 'gray'}
              />
            );
          } else if (route.name == 'Emergency') {
            return (
              <Icon
                name="alarm-light"
                type="material-community"
                color={focused ? '#00A0F3' : 'gray'}
              />
            );
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Service"
        component={ServiceScreen}
      />
      <Tab.Screen
        name="Emergency"
        component={EmergencyScreen}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
