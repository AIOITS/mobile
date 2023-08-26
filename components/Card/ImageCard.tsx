import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { CameraCapturedPicture } from 'expo-camera';

interface Props {
  image: CameraCapturedPicture;
}

const ImageCard = ({ image }: Props) => {
  const tw = useTailwind();

  return (
    <View style={[tw('w-full'), { maxHeight: 300 }]}>
      <ImageBackground
        source={{ uri: image.uri }}
        style={{ width: '100%', height: '100%' }}>
        <Image
          source={{ uri: image.uri }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </ImageBackground>
    </View>
  );
};

export default ImageCard;
