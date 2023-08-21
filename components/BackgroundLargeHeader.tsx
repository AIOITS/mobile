import React, { ReactNode, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { NotifyNavigationProps } from '../navigator/Menu/Menu';

interface BackgroundLargeHeaderProps {
  header: string;
  subHeader: string;
  backgroundImageSource: any;
  children: ReactNode;
  backButton?: boolean;
  reverseHeader?: boolean;
  main?: boolean;
  bell?: boolean;
  onBackClick?: () => void;
}

const BackgroundLargeHeader = ({
  header,
  subHeader,
  backgroundImageSource,
  children,
  backButton,
  reverseHeader,
  main,
  bell,
  onBackClick,
}: BackgroundLargeHeaderProps) => {
  const tw = useTailwind();
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const navigation = useNavigation<NotifyNavigationProps>();
  const [active, setActive] = useState<boolean>(true);

  return (
    <ScrollView style={tw('bg-white flex-1')}>
      <ImageBackground
        source={backgroundImageSource}
        style={[
          { position: 'absolute', zIndex: -1, width: screenWidth, height: 728 },
        ]}
        imageStyle={{
          resizeMode: 'cover',
        }}></ImageBackground>
      <View
        style={[
          tw('mx-3 pt-8 flex-1 flex flex-col justify-start items-stretch'),
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
          <View style={tw('flex-1 top-0 bottom-0')}>
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
  );
};

export default BackgroundLargeHeader;
