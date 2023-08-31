import { View, Text, Alert, ImageBackground, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
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
import { CameraNavigationProp } from '../../navigator/Camera/CameraNavigationProp';
import { useCameraContext } from '../../contexts/CameraContext';
import { CameraCapturedPicture } from 'expo-camera';
import ImageCard from '../../components/Card/ImageCard';

const data = ['Foto KTP', 'Foto Wajah', 'Validasi'];

const instruksi = [
  {
    num: 'a',
    text: 'Seluruh bagian wajah dan KTP harus terlihat jelas.',
  },
  {
    num: 'b',
    text: 'Kualitas foto harus tajam dan saat di-zoom informasi KTP harus terbaca.',
  },
  {
    num: 'c',
    text: 'Dekatkan KTP ke kamera, jauhkan muka dari kamera agar fokus kepada KTP.',
  },
];

const FotoKTP = () => {
  const tw = useTailwind();
  const navigation = useNavigation<ActivateNavigationProps>();
  const { title, state } = useStepIndicator(data, 0);
  const cam_navigation = useNavigation<CameraNavigationProp>();
  const { cameraHook } = useCameraContext();
  const { capturedImage, __resetPreview } = cameraHook;
  const [imageRes, setImageRes] = useState<
    CameraCapturedPicture | null | undefined
  >();

  useEffect(() => {
    if (capturedImage) {
      setImageRes(capturedImage);
    }

    return () => {
      setImageRes(null);
    };
  }, [capturedImage]);

  return (
    <BackgroundWithHeader
      header="Aktivasi"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      subHeader="Silahkan foto ktp anda">
      <StepCircleIndicator data={{ title, state }} />

      <Instruksi soal={instruksi} />

      {imageRes && <ImageCard image={imageRes} />}

      <View
        style={[
          { width: 130 },
          tw('items-center justify-center w-full mx-auto'),
        ]}>
        <ButtonIcon
          onButtonClick={() => cam_navigation.navigate('Camera')}
          titleButton="Ambil Foto"
          titleButtonStyle="text-white font-semibold text-sm"
          customButton="bg-primary-light-blue">
          <Icon
            name="camera"
            type="entypo"
            size={20}
            color={'white'}
          />
        </ButtonIcon>
      </View>

      <View style={tw('absolute bottom-3 right-0 left-0')}>
        <ButtonComponent
          buttonTitle="Lanjutkan"
          onNavigationClick={() => {
            navigation.navigate('FacePhoto');
            __resetPreview();
          }}
        />
      </View>
    </BackgroundWithHeader>
  );
};

export default FotoKTP;
