import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import InfoBlockDisplay from './InfoBlockDisplay';
import replaceUnderscores from '../../utils/replaceUnderscores';

interface Props {
  usage: string;
  title: string;
  date: string;
  volume: string;
}

const InfoPengisianText = ({ title, date, volume, usage }: Props) => {
  const tw = useTailwind();
  const handleColor = (usage: string) => {
    const text = replaceUnderscores(usage);
    const usageLowerCase = text.toLowerCase();
    switch (usageLowerCase) {
      case 'subsidi':
        return 'bg-strong-pink';
      case 'non subsidi':
        return 'bg-primary-light-blue';
      case 'top up':
        return 'bg-light-green';
      default:
        return 'bg-strong-pink';
    }
  };

  return (
    <View
      style={[
        tw('flex flex-row items-center justify-start w-full'),
        { gap: 8 },
      ]}>
      <View style={{ flexDirection: 'row', width: 70 }}>
        <Text
          style={tw(
            `text-xs rounded-md p-1 text-white font-light capitalize ${handleColor(
              usage,
            )}`,
          )}>
          {replaceUnderscores(usage)}
        </Text>
      </View>
      <InfoBlockDisplay
        title={title}
        subTitle={date}
        titleStyle="text-cape-storm text-sm"
        subTitleStyle="text-cape-storm text-xs font-normal"
        gap={1}
      />
      <Text style={tw('text-sm font-bold text-right flex-1')}>{volume}</Text>
    </View>
  );
};

export default InfoPengisianText;
