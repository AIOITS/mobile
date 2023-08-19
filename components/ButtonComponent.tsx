import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { Button } from '@rneui/themed';
import { AuthScreenParamList } from '../navigator/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import { RegisByEmailNavigationProps } from '../navigator/Auth/RegisByEmailNavigationProps';

interface Props {
  navigateTo: AuthScreenParamList;
  buttonTitle: string;
}

const ButtonComponent = ({ navigateTo, buttonTitle }: Props) => {
  const tw = useTailwind();
  const navigation = useNavigation<RegisByEmailNavigationProps>();

  return (
    <Button
      onPress={() => navigation.navigate(navigateTo)}
      title={buttonTitle}
      buttonStyle={tw('bg-primary-light-blue rounded-lg py-2')}
    />
  );
};

export default ButtonComponent;
