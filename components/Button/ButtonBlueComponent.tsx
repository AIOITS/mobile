import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { Button } from '@rneui/themed';

interface Props {
  buttonTitle: string;
  width?: number | string;
  height?: number | string;
  buttonStyle?: string;
  onNavigationClick: () => void;
}

const ButtonBlueComponent = ({
  buttonTitle,
  width,
  height,
  onNavigationClick,
  buttonStyle,
}: Props) => {
  const tw = useTailwind();

  return (
    <Button
      onPress={onNavigationClick}
      title={buttonTitle}
      buttonStyle={[
        tw(
          `bg-primary-light-blue rounded-lg ${height ? height : 'py-2'} ${
            width ? width : ''
          } ${buttonStyle ? buttonStyle : ''}`,
        ),
      ]}
    />
  );
};

export default ButtonBlueComponent;
