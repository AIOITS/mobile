import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import { RegisNavigationProps } from '../../navigator/Auth/RegisNavigationProps';
import { Button } from '@rneui/themed';

interface Props {
  buttonTitle: string;
  width?: number | string;
  height?: number | string;
  onNavigationClick: () => void;
}

const ButtonOutlineComponent = ({
  buttonTitle,
  width,
  height,
  onNavigationClick,
}: Props) => {
  const tw = useTailwind();
  const navigation = useNavigation<RegisNavigationProps>();

  return (
    <Button
      onPress={onNavigationClick}
      title={buttonTitle}
      buttonStyle={[
        tw(
          `bg-secondary-white rounded-lg border-primary-light-blue border-2 ${
            height ? height : 'py-2'
          } ${width ? width : ''}`,
        ),
      ]}
      type="outline"
      titleStyle={tw('text-primary-light-blue')}
    />
  );
};

export default ButtonOutlineComponent;
