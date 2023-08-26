import { View, Text, Button } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { ResizeMode, Video } from 'expo-av';
import { CameraRecording } from '../../hooks/Camera/useCamera';

interface Props {
  videoRef: React.RefObject<Video>;
  recordingObject: CameraRecording;
  videoStatus: {
    isPlaying: boolean;
  };
  setVideoStatus: React.Dispatch<
    React.SetStateAction<{
      isPlaying: boolean;
    }>
  >;
}

const VideoCard = ({
  videoRef,
  recordingObject,
  videoStatus,
  setVideoStatus,
}: Props) => {
  const tw = useTailwind();

  const handlePlayPause = async () => {
    if (recordingObject && videoStatus.isPlaying) {
      await videoRef.current?.pauseAsync();
      setVideoStatus({ isPlaying: false });
    } else if (recordingObject) {
      await videoRef.current?.playAsync();
      setVideoStatus({ isPlaying: true });
    }
  };

  return (
    <View>
      <Video
        ref={videoRef}
        style={{ width: 320, height: 200 }}
        source={{ uri: recordingObject.uri }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => {
          if (status.isLoaded) {
            setVideoStatus({ isPlaying: status.isPlaying });
          }
        }}
      />
      <View style={tw('flex-row justify-center items-center')}>
        <Button
          title={videoStatus.isPlaying ? 'Pause' : 'Play'}
          onPress={handlePlayPause}
        />
      </View>
    </View>
  );
};

export default VideoCard;
