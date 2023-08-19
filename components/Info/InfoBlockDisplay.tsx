import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/themed';

interface Props {
  title: string;
  subTitle: string;
  titleStyle?: string;
  subTitleStyle?: string;
  info?: string;
  detailInfo?: string;
  gap?: number;
}

const InfoBlockDisplay = ({
  title,
  subTitle,
  titleStyle,
  subTitleStyle,
  detailInfo,
  info,
  gap,
}: Props) => {
  const tw = useTailwind();

  return (
    <View style={[tw('flex flex-col'), { gap: info ? 3 : gap ? gap : -3 }]}>
      <Text style={tw(titleStyle || 'text-white text-xs')}>{title}</Text>
      <View
        style={[
          tw(`${info ? 'flex flex-row items-center justify-center' : ''}`),
          { gap: info ? 3 : 0 },
        ]}>
        <Text style={[tw('font-bold'), tw(subTitleStyle || 'text-white')]}>
          {subTitle}
        </Text>
        {info && (
          <View style={tw('p-1 bg-golden rounded-md')}>
            <Text style={tw('text-white text-xs')}>{info}</Text>
          </View>
        )}
      </View>
      {detailInfo && (
        <View
          style={[tw('flex flex-row items-center justify-center'), { gap: 3 }]}>
          <Text style={tw('text-white text-center font-semibold')}>
            {detailInfo}
          </Text>
          <Icon
            name="arrowright"
            type="antdesign"
            size={20}
            color={'white'}
          />
        </View>
      )}
    </View>
  );
};

export default InfoBlockDisplay;
