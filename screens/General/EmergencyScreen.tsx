import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Animated,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/themed';
import ButtonIcon from '../../components/Button/ButtonIcon';
import useLocation from '../../hooks/Location/useLocation';

const EmergencyScreen = () => {
  const tw = useTailwind();
  const [scrollX] = useState(new Animated.Value(0));
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      // Update the scrollX value based on the swipe gesture
      const newX = gestureState.moveX - gestureState.dx;
      scrollX.setValue(newX);
    },
    onPanResponderRelease: () => {
      // Perform any cleanup or final actions here if needed
    },
  });

  const { __getLocation, __locationPermissions, locationName, loading } =
    useLocation();

  return (
    <SafeAreaView style={tw('bg-strong-pink flex-1')}>
      <View
        style={[
          tw('flex flex-col my-10 mx-3 justify-around flex-1'),
          { gap: 15 },
        ]}>
        {/* location start */}
        <View style={tw('flex flex-row justify-between items-center w-full')}>
          {/* lokasi start */}
          <View style={[tw('flex flex-row'), { gap: 10 }]}>
            <Icon
              name="locate-sharp"
              type="ionicon"
              size={20}
              color={'white'}
            />
            <View
              style={[
                tw('flex flex-col items-start justify-start'),
                { width: 235 },
              ]}>
              <Text style={tw('text-sm font-normal text-white')}>Lokasi</Text>
              <Text style={tw('text-sm font-bold text-white')}>
                {loading ? 'Loading...' : locationName}
              </Text>
            </View>
          </View>
          {/* lokasi end */}

          {/* reload start */}
          <TouchableOpacity
            onPress={() => {
              __locationPermissions();
              __getLocation();
            }}
            style={[
              tw('flex flex-col flex-1 justify-center items-center'),
              { width: 50 },
            ]}>
            <Icon
              name="reload-outline"
              type="ionicon"
              size={30}
              color={'white'}
            />
            <Text style={tw('text-sm font-normal text-white text-center')}>
              Ulangi Cek Lokasi
            </Text>
          </TouchableOpacity>
          {/* reload end */}
        </View>
        {/* location end */}

        {/* button scroll start */}
        <View style={tw('w-full bg-cape-storm rounded-full py-5')}>
          <ScrollView
            horizontal={true}
            style={tw('absolute')}
            {...panResponder.panHandlers}>
            {/* scroll */}
            <Animated.View
              style={[
                tw('p-5 rounded-full bg-strong-pink border-white border-4'),
                {
                  transform: [
                    {
                      translateX: scrollX,
                    },
                  ],
                },
              ]}>
              <Icon
                name="alert-triangle"
                type="feather"
                size={25}
                color={'#D5A419'}
              />
            </Animated.View>
            {/* scroll */}
          </ScrollView>
          <Text style={tw('text-white font-bold text-lg text-center')}>
            Geser untuk laporkan
          </Text>
        </View>
        <Text style={tw('text-center font-bold text-white')}>
          Geser hanya jika dalam kondisi darurat
        </Text>
        {/* button scroll end */}

        {/* button start */}
        <ButtonIcon
          titleButton="Panggilan Darurat"
          titleButtonStyle="text-cape-storm font-semibold text-sm"
          customButton="bg-secondary-white items-center justify-center">
          <Icon
            name="call"
            type="ionicon"
            size={20}
            color={'#AD3B6F'}
          />
        </ButtonIcon>
        {/* button end */}
      </View>
    </SafeAreaView>
  );
};

export default EmergencyScreen;
