import { Video } from 'expo-av';
import { Camera, CameraCapturedPicture } from 'expo-camera';
import React, { useState, useEffect, useRef } from 'react';
import { Alert } from 'react-native';

export interface UseCameraHook {
  startCamera: boolean;
  __cameraPermissions: () => Promise<void>;
  __audioPermissions: () => Promise<void>;
  capturedImage: CameraCapturedPicture | null | undefined;
  __takePicture: () => Promise<void>;
  __resetPreview: () => void;
  __resetVideo: () => void;
  previewVisible: boolean;
  cameraRef: React.RefObject<Camera>;
  videoRef: React.RefObject<Video>;
  __takeVideo: () => Promise<void>;
  __stopVideo: () => Promise<void>;
  isRecording: boolean;
  recordingObject: CameraRecording | null;
}

export interface CameraRecording {
  uri: string;
  codec?: string;
  duration?: number;
  isRecordingInterrupted?: boolean;
}

const useCamera = (): UseCameraHook => {
  const [startCamera, setStartCamera] = useState<boolean>(false);
  const [cameraStatus, setCameraStatus] = useState<string>('undetermined');
  const [audioStatus, setAudioStatus] = useState<string>('undetermined');
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [capturedImage, setCapturedImage] = useState<
    CameraCapturedPicture | null | undefined
  >();
  const [record, setRecord] = useState<Camera['recordAsync'] | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [recordingObject, setRecordingObject] =
    useState<CameraRecording | null>(null);

  const cameraRef = useRef<Camera>(null);
  const videoRef = useRef<Video>(null);

  const requestCameraPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === 'granted') {
      setCameraStatus('granted');
    } else {
      setCameraStatus('denied');
    }
  };

  const requestAudioPermissions = async () => {
    const { status } = await Camera.requestMicrophonePermissionsAsync();

    if (status === 'granted') {
      setAudioStatus('granted');
    } else {
      setAudioStatus('denied');
    }
  };

  const __takePicture = async () => {
    if (!cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync();
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const __resetPreview = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
  };

  const __resetVideo = () => {
    setVideoUri(null);
    setPreviewVisible(false);
  };

  const __takeVideo = async () => {
    if (!cameraRef.current) return;

    try {
      const recording = await cameraRef.current.recordAsync();
      setRecordingObject(recording);
      setIsRecording(true);
      setPreviewVisible(true);
    } catch (error) {
      console.error('Error recording video:', error);
      setIsRecording(false);
    }
  };

  const __stopVideo = async () => {
    if (!cameraRef.current) return;

    try {
      cameraRef.current.stopRecording();
      setIsRecording(false);
    } catch (error) {
      console.error('Error stopping video:', error);
    }
  };

  useEffect(() => {
    if (cameraStatus === 'granted') {
      setStartCamera(true);
    } else if (cameraStatus === 'denied') {
      Alert.alert('Access denied');
    }
  }, [cameraStatus]);

  useEffect(() => {
    return () => {
      setCapturedImage(null);
    };
  }, []);

  console.log(recordingObject);
  console.log(isRecording);

  return {
    startCamera,
    __cameraPermissions: requestCameraPermissions,
    __audioPermissions: requestAudioPermissions,
    previewVisible,
    capturedImage,
    __takePicture,
    __resetPreview,
    __resetVideo,
    cameraRef,
    videoRef,
    __takeVideo,
    __stopVideo,
    isRecording,
    recordingObject,
  };
};

export default useCamera;
