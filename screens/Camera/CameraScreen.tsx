import { View, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/base';
import { useCameraContext } from '../../contexts/CameraContext';
import { useNavigation } from '@react-navigation/native';

const CameraScreen = () => {
  const tw = useTailwind();
  const [type, setType] = useState(CameraType.back);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const screenAspectRatio = screenWidth / screenHeight;
  const { cameraHook } = useCameraContext();
  const { __takePicture, cameraRef, __cameraPermissions } = cameraHook;
  const navigation = useNavigation();

  useEffect(() => {
    __cameraPermissions();
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  }

  return (
    <View style={tw('flex-1 justify-center')}>
      <Camera
        ref={cameraRef}
        style={[tw('flex-1'), { aspectRatio: screenAspectRatio }]}
        type={type}>
        <View
          style={tw('flex flex-row flex-1 items-end bottom-3 justify-around')}>
          {/* flip camera start */}
          <TouchableOpacity
            style={tw('bg-white rounded-full p-5')}
            onPress={toggleCameraType}>
            <Icon
              name="camera-reverse"
              type="ionicon"
              size={30}
              color="#00A0F3"
            />
          </TouchableOpacity>
          {/* flip camera end */}

          {/* button start */}
          <TouchableOpacity
            style={tw('bg-white rounded-full p-5')}
            onPress={__takePicture}>
            <Icon
              name="camera"
              type="entypo"
              size={30}
              color="#00A0F3"
            />
          </TouchableOpacity>
          {/* button end */}

          {/* next start */}
          <TouchableOpacity
            style={tw('bg-white rounded-full p-5')}
            onPress={() => navigation.goBack()}>
            <Icon
              name="arrowright"
              type="antdesign"
              size={30}
              color="#00A0F3"
            />
          </TouchableOpacity>
          {/* next end */}
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
