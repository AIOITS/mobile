import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { Button } from '@rneui/themed';

interface Props {
  buttonTitle: string;
  buttonTitleStyle?: string;
  width?: number | string;
  height?: number | string;
  buttonStyle?: string;
  onNavigationClick: () => void;
  color?: string;
}

const ButtonComponent = ({
  buttonTitle,
  buttonTitleStyle,
  width,
  height,
  onNavigationClick,
  buttonStyle,
  color,
}: Props) => {
  const tw = useTailwind();

  return (
    <Button
      onPress={onNavigationClick}
      title={buttonTitle}
      titleStyle={tw(`${buttonTitleStyle ? buttonTitleStyle : ''}`)}
      buttonStyle={[
        tw(
          `${color ? color : 'bg-primary-light-blue'} rounded-lg ${
            height ? height : 'py-2'
          } ${width ? width : ''} ${buttonStyle ? buttonStyle : ''}`,
        ),
      ]}
    />
  );
};

export default ButtonComponent;
