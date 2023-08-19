import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import InfoBlockDisplay from '../Info/InfoBlockDisplay';
import MotorcycleCardSVG from '../../assets/motorcycle-card.svg';

interface Props {
  vehicleName: string;
  engineSpec: string;
  reminderTitle: string;
  reminderDate: string;
}

const VehicleCard = ({
  vehicleName,
  engineSpec,
  reminderTitle,
  reminderDate,
}: Props) => {
  const tw = useTailwind();

  return (
    <View
      style={[
        tw(
          'bg-primary-light-blue rounded-lg flex flex-row py-2 px-3 items-center',
        ),
        { maxHeight: 100, gap: 15 },
      ]}>
      <View style={[tw('flex flex-col'), { gap: 2 }]}>
        <InfoBlockDisplay
          title={vehicleName}
          subTitle={engineSpec}
        />
        <InfoBlockDisplay
          title={reminderTitle}
          subTitle={reminderDate}
        />
      </View>
      <View>
        <MotorcycleCardSVG height={100} />
      </View>
    </View>
  );
};

export default VehicleCard;
