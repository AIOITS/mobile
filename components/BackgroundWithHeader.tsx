import React, { ReactNode, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { NotifyNavigationProps } from '../navigator/Menu/Menu';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, CameraType } from 'expo-camera';
import useCamera from '../hooks/Camera/useCamera';
import { useCameraContext } from '../contexts/CameraContext';

interface BackgroundWithHeaderProps {
  header: string;
  subHeader: string;
  children: ReactNode;
  backButton?: boolean;
  reverseHeader?: boolean;
  main?: boolean;
  bell?: boolean;
  onBackClick?: () => void;
}

let camera: Camera;

const BackgroundWithHeader = ({
  header,
  subHeader,
  children,
  backButton,
  reverseHeader,
  main,
  bell,
  onBackClick,
}: BackgroundWithHeaderProps) => {
  const tw = useTailwind();
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const navigation = useNavigation<NotifyNavigationProps>();
  const [active, setActive] = useState<boolean>(true);

  return (
    <SafeAreaView style={tw('bg-white flex-1')}>
      <ScrollView>
        <ImageBackground
          source={
            main
              ? require('../assets/bg/bg-medium.png')
              : require('../assets/bg/bg-large.png')
          }
          style={[
            {
              position: 'absolute',
              zIndex: -1,
              width: screenWidth,
              height: 728,
            },
          ]}
          imageStyle={{
            resizeMode: 'cover',
          }}
        />
        <View
          style={[
            tw('mx-3 pt-3 flex-1 flex flex-col justify-start items-stretch'),
            { minHeight: main ? screenHeight : 728, gap: main ? 25 : 0 },
          ]}>
          {/* title start */}
          <View
            style={[
              tw(`my-3 flex flex-row items-start ${main ? 'mb-20' : 'mb-0'}`),
              { gap: 5 },
            ]}>
            {backButton && (
              <TouchableOpacity onPress={onBackClick}>
                <Icon
                  name="left"
                  type="antdesign"
                  size={25}
                  color="white"
                />
              </TouchableOpacity>
            )}
            <View style={[tw('flex flex-col'), { gap: 2 }]}>
              <Text
                style={tw(
                  `text-white ${
                    reverseHeader ? 'text-sm' : 'text-3xl font-bold'
                  }`,
                )}>
                {header}
              </Text>
              <Text
                style={tw(
                  `text-white flex-shrink mr-5 ${
                    reverseHeader ? 'text-3xl font-bold' : 'text-sm'
                  }`,
                )}>
                {subHeader}
              </Text>
            </View>
            {bell && (
              <TouchableOpacity
                style={tw('right-2 absolute')}
                onPress={() => navigation.navigate('Notification')}>
                <Icon
                  name="bell"
                  type="material-community"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            )}
          </View>
          {/* title end */}

          {/* content start */}
          {!active && (
            <View style={tw('flex-1 top-0 bottom-3')}>
              <Text style={tw('text-center font-light')}>
                Akun kamu masih dalam proses persetujuan. Harap menunggu paling
                lambat 3 hari untuk hasil validasi data kamu.
              </Text>
            </View>
          )}
          {active && children}
          {/* content end */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BackgroundWithHeader;
