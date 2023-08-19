import React, { ReactNode } from 'react';
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

  return (
    <ScrollView style={tw('bg-white flex-1')}>
      <ImageBackground
        source={backgroundImageSource}
        style={[
          // tw('absolute left-0 top-0 right-0 bottom-0'),
          { minHeight: main ? screenHeight : 728, width: screenWidth },
        ]}
        imageStyle={{
          resizeMode: 'cover',
          alignSelf: 'flex-end',
        }}>
        {/* <View style={[tw('absolute left-0 top-0 right-0 bottom-0')]}> */}
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
              <TouchableOpacity style={tw('right-2 absolute')}>
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
          {children}
          {/* content end */}
        </View>
        {/* </View> */}
      </ImageBackground>
    </ScrollView>
  );
};

export default BackgroundLargeHeader;
