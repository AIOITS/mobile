import { View, Text, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import { MenuScreenNavigationProp } from '../../navigator/Menu/Menu';
import { MenuScreenParamList } from '../../navigator/Menu/MenuParams';
import CardElevation from './CardElevation';
import { normalize } from '@rneui/themed';

interface Props {
  title: string;
  children: ReactNode;
  navigateTo: MenuScreenParamList;
}

const MenuCard = ({ title, children, navigateTo }: Props) => {
  const tw = useTailwind();
  const navigation = useNavigation<MenuScreenNavigationProp>();

  return (
    <View
      style={[
        tw('flex flex-col items-center'),
        {
          width: '23%',
          gap: 5,
        },
      ]}>
      <CardElevation
        onCardClick={() => navigation.navigate(navigateTo)}
        cardStyle="px-2 py-3">
        {children}
      </CardElevation>
      <Text
        style={[
          tw('text-center font-semibold text-cape-storm uppercase'),
          { fontSize: normalize(10) },
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default MenuCard;
