import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { AuthScreenParamList } from '../navigator/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import { RegisByEmailNavigationProps } from '../navigator/Auth/RegisByEmailNavigationProps';
import { Button } from '@rneui/themed';

interface Props {
  navigateTo: AuthScreenParamList;
  buttonTitle: string;
}

const ButtonOutlineComponent = ({ navigateTo, buttonTitle }: Props) => {
  const tw = useTailwind();
  const navigation = useNavigation<RegisByEmailNavigationProps>();

  return (
    <Button
      onPress={() => navigation.navigate(navigateTo)}
      title={buttonTitle}
      buttonStyle={tw(
        'bg-secondary-white rounded-lg border-primary-light-blue border-2 py-2',
      )}
      type="outline"
      titleStyle={tw('text-primary-light-blue')}
    />
  );
};

export default ButtonOutlineComponent;
