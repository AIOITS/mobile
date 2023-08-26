import { View, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/base';
import { useCameraContext } from '../../hooks/Camera/CameraContext';
import { useNavigation } from '@react-navigation/native';

const VideoScreen = () => {
  const tw = useTailwind();
  const [type, setType] = useState(CameraType.back);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const screenAspectRatio = screenWidth / screenHeight;
  const { cameraHook } = useCameraContext();
  const [record, setRecord] = useState<boolean>(false);
  const {
    __takeVideo,
    cameraRef,
    isRecording,
    __stopVideo,
    __cameraPermissions,
    __audioPermissions,
  } = cameraHook;
  const navigation = useNavigation();

  useEffect(() => {
    __cameraPermissions();
    __audioPermissions();

    return () => {
      __stopVideo();
    };
  }, [isRecording]);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  }

  const handleRecording = () => {
    setRecord(!record);
  };

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
          {record ? (
            <TouchableOpacity
              style={tw('bg-white rounded-full p-5')}
              onPress={() => {
                __stopVideo();
                handleRecording();
              }}>
              <Icon
                name="controller-stop"
                type="entypo"
                size={30}
                color="#00A0F3"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={tw('bg-white rounded-full p-5')}
              onPress={() => {
                __takeVideo();
                handleRecording();
              }}>
              <Icon
                name="video-camera"
                type="font-awesome"
                size={30}
                color="#00A0F3"
              />
            </TouchableOpacity>
          )}
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

export default VideoScreen;
