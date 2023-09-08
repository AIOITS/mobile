import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import AIOITS from '../../assets/logo/aioits.svg';
import * as Animatable from 'react-native-animatable';

const Loading: React.FC = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  let animation: Animated.CompositeAnimation | null = null;

  useEffect(() => {
    startAnimation();
    return () => {
      stopAnimation();
    };
  }, []);

  const startAnimation = () => {
    animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    );
    animation.start();
  };

  const stopAnimation = () => {
    if (animation) {
      animation.stop();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animatable.View
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={{ transform: [{ scale: scaleValue }] }}>
        <AIOITS
          width={120}
          height={120}
          color="#808080"
        />
      </Animatable.View>
    </View>
  );
};

export default Loading;
