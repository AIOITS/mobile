import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { Icon, normalize } from '@rneui/themed';

interface Props {
  data?: {
    title: string[];
    state: number[];
  };
}

// state:
// 0: disable
// 1: primary-light-blue
// 2: primary-light-blue + icon

const StepCircleIndicator = ({ data }: Props) => {
  const tw = useTailwind();

  return (
    <View style={[tw('flex flex-row items-start justify-center'), { gap: 14 }]}>
      {/* circle one */}
      {data?.title.map((title, index) => (
        <View key={index}>
          <View
            key={index}
            style={[
              tw('flex flex-col items-center justify-center'),
              { gap: 2, width: 58 },
            ]}>
            <View
              style={[
                {
                  width: 23,
                  height: 23,
                  borderRadius: 23 / 2,
                  borderWidth: 2,
                },
                tw(
                  `items-center justify-center ${
                    data.state[index] == 0
                      ? 'border-disable'
                      : 'border-primary-light-blue'
                  }`,
                ),
              ]}>
              {data.state[index] == 2 ? (
                <Icon
                  name="checkcircle"
                  type="antdesign"
                  size={14}
                  color={'#00A0F3'}
                />
              ) : (
                <View
                  style={[
                    {
                      width: 14,
                      height: 14,
                      borderRadius: 14 / 2,
                    },
                    tw(
                      `${
                        data.state[index] == 0
                          ? 'bg-disable'
                          : 'bg-primary-light-blue'
                      }`,
                    ),
                  ]}
                />
              )}
            </View>
            <Text
              style={[
                tw(
                  `font-semibold text-center ${
                    data.state[index] == 0
                      ? 'text-disable'
                      : 'text-primary-light-blue'
                  }`,
                ),
                { fontSize: normalize(9) },
              ]}>
              {title}
            </Text>
          </View>

          {index !== 0 && (
            <View
              style={[
                tw(
                  `border-2 rounded-lg w-10 absolute mx-auto top-2 ${
                    data.state[index] == 0
                      ? 'border-disable'
                      : 'border-primary-light-blue'
                  }`,
                ),
                { right: 45 },
              ]}></View>
          )}
        </View>
      ))}
    </View>
  );
};

export default StepCircleIndicator;
