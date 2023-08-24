import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import TapCardSVG from '../../assets/money/tap-card.svg';

const CekSaldo = () => {
  const tw = useTailwind();

  return (
    <View style={tw('flex-1 bg-primary-light-blue')}>
      <View style={[tw('my-auto items-center justify-center'), { gap: 20 }]}>
        <TapCardSVG width={'90%'} />
        <View style={[tw('items-center justify-center'), { gap: 10 }]}>
          <Text style={tw('text-white font-bold text-2xl')}>Tap Kartu</Text>
          <Text style={tw('text-white text-base font-light')}>
            Silahkan tap kartu ke smartphone kamu
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CekSaldo;
