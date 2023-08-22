import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import InfoBlockDisplay from '../Info/InfoBlockDisplay';
import MotorcycleCardSVG from '../../assets/motorcycle-card.svg';

interface Props {
  vehicleName: string;
  engineSpec: string;
  reminderTitle: string;
  reminderDate: string;
  disabled?: boolean;
  selected?: boolean;
  onSelected?: () => void;
}

const VehicleCard = ({
  vehicleName,
  engineSpec,
  reminderTitle,
  reminderDate,
  disabled,
  selected,
  onSelected,
}: Props) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity
      onPress={onSelected}
      disabled={disabled}
      style={[
        tw(
          `rounded-lg flex flex-row py-2 px-3 items-center ${
            disabled
              ? 'bg-primary-light-blue border-primary-light-blue'
              : onSelected && selected
              ? 'bg-primary-light-blue border-primary-light-blue'
              : 'bg-white border-primary-light-blue'
          }`,
        ),
        { maxHeight: 100, gap: 15, borderWidth: 1 },
      ]}>
      <View style={[tw('flex flex-col'), { gap: 2 }]}>
        <InfoBlockDisplay
          title={vehicleName}
          titleStyle={`font-light ${
            disabled
              ? 'text-white'
              : selected
              ? 'text-white'
              : 'text-primary-light-blue'
          }`}
          subTitle={engineSpec}
          subTitleStyle={`${
            disabled ? '' : selected ? 'text-white' : 'text-primary-light-blue'
          }`}
        />
        <InfoBlockDisplay
          title={reminderTitle}
          titleStyle={`font-light ${
            disabled
              ? 'text-white'
              : selected
              ? 'text-white'
              : 'text-primary-light-blue'
          }`}
          subTitle={reminderDate}
          subTitleStyle={`${
            disabled ? '' : selected ? 'text-white' : 'text-primary-light-blue'
          }`}
        />
      </View>
      <View>
        <MotorcycleCardSVG height={100} />
      </View>
    </TouchableOpacity>
  );
};

export default VehicleCard;
