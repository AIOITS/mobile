import React, { ReactNode } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/themed';

interface BackgroundLargeHeaderProps {
  header: string;
  subHeader: string;
  backgroundImageSource: any;
  children: ReactNode;
  backButton?: boolean;
}

const BackgroundLargeHeader = ({
  header,
  subHeader,
  backgroundImageSource,
  children,
  backButton,
}: BackgroundLargeHeaderProps) => {
  const tw = useTailwind();
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  return (
    <View style={tw('bg-white flex-1')}>
      <ImageBackground
        source={backgroundImageSource}
        style={[
          tw('absolute left-0 top-0'),
          { height: screenHeight, width: screenWidth },
        ]}
        imageStyle={{
          resizeMode: 'cover',
          alignSelf: 'flex-end',
        }}>
        <View
          style={tw(
            'mx-3 pt-8 flex-1 flex flex-col items-stretch justify-between',
          )}>
          {/* title start */}
          <View style={[tw('my-3 flex flex-row items-start'), { gap: 5 }]}>
            {backButton && (
              <TouchableOpacity>
                <Icon
                  name="left"
                  type="antdesign"
                  size={25}
                  color="white"
                />
              </TouchableOpacity>
            )}
            <View>
              <Text style={tw('text-3xl text-white font-bold')}>{header}</Text>
              <Text style={tw('text-sm text-white flex-shrink mr-5')}>
                {subHeader}
              </Text>
            </View>
          </View>
          {/* title end */}

          {/* content start */}
          {children}
          {/* content end */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default BackgroundLargeHeader;
