import { View } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { ActivateNavigationProps } from '../../navigator/Auth/RegisNavigationProps';
import useStepIndicator from '../../hooks/useStepIndicator';
import StepCircleIndicator from '../../components/Indicator/StepCircleIndicator';
import ButtonIcon from '../../components/Button/ButtonIcon';
import { Icon } from '@rneui/themed';
import Instruksi from '../../components/Tes/Instruksi';
import ButtonComponent from '../../components/Button/ButtonComponent';
import { useCameraContext } from '../../hooks/Camera/CameraContext';
import { CameraNavigationProp } from '../../navigator/Camera/CameraNavigationProp';
import VideoCard from '../../components/Card/VideoCard';

const data = ['Foto KTP', 'Foto Wajah', 'Validasi'];

const instruksi = [
  {
    num: 'a',
    text: 'Lakukan setiap gerakan yang akan diinstruksikan',
  },
  {
    num: 'b',
    text: 'Area wajah terlihat jelas tanpa menggunakan aksesori seperti kacamata, masker, topi, dan lain-lain',
  },
  {
    num: 'c',
    text: 'Pastikan wajah terlihat dengan jelas',
  },
];

const Validasi = () => {
  const tw = useTailwind();
  const navigation = useNavigation<ActivateNavigationProps>();
  const cam_navigation = useNavigation<CameraNavigationProp>();
  const { title, state } = useStepIndicator(data, 2);
  const { cameraHook } = useCameraContext();
  const { recordingObject, isRecording, videoRef } = cameraHook;
  const [videoStatus, setVideoStatus] = useState({ isPlaying: false });

  return (
    <BackgroundWithHeader
      header="Aktivasi"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      subHeader="Silahkan ambil video wajah anda">
      <StepCircleIndicator data={{ title, state }} />

      <Instruksi soal={instruksi} />

      {/* video start */}
      {recordingObject && (
        <VideoCard
          recordingObject={recordingObject}
          setVideoStatus={setVideoStatus}
          videoRef={videoRef}
          videoStatus={videoStatus}
        />
      )}
      {/* video end */}

      <View
        style={[
          { width: 130 },
          tw('items-center justify-center w-full mx-auto'),
        ]}>
        <ButtonIcon
          onButtonClick={() => cam_navigation.navigate('Video')}
          titleButton="Ambil Video"
          titleButtonStyle="text-white font-semibold text-sm"
          customButton="bg-primary-light-blue">
          <Icon
            name="video-camera"
            type="font-awesome"
            size={20}
            color={'white'}
          />
        </ButtonIcon>
      </View>

      <View style={tw('absolute bottom-3 right-0 left-0')}>
        <ButtonComponent
          buttonTitle="Lanjutkan"
          onNavigationClick={() => {
            navigation.navigate('ValidateComplete');
          }}
        />
      </View>
    </BackgroundWithHeader>
  );
};

export default Validasi;
