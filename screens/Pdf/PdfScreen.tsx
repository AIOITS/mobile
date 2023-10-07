import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import Pdf from 'react-native-pdf';
import { useRoute } from '@react-navigation/native';
import { PdfNavigationProps } from '../../navigator/Pdf/PdfNavigationProp';

const PdfScreen = () => {
  const tw = useTailwind();
  const {
    params: { url, name },
  } = useRoute<PdfNavigationProps>();
  const screenWidth = Dimensions.get('window').width;

  return (
    <Pdf
      trustAllCerts={false}
      source={{ uri: url, cache: true }}
      style={[tw('flex-1'), { width: screenWidth }]}
      onError={(error) => console.log(error)}
    />
  );
};

export default PdfScreen;
