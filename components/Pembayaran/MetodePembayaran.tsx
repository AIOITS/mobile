import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../BackgroundWithHeader';
import InfoBlockDisplay from '../Info/InfoBlockDisplay';
import SIMoneySVG from '../../assets/money/si-money.svg';
import OptionWithStatusIndicator from '../Info/OptionWithStatusIndicator';
import ButtonComponent from '../Button/ButtonComponent';
import StepCircleIndicator from '../Indicator/StepCircleIndicator';
import { useNavigation } from '@react-navigation/native';

interface Props {
  step?: boolean;
  title?: string;
  onButtonClick: () => void;
  withoutTotal?: boolean;
  data?: {
    title: string[];
    state: number[];
  };
}

const MetodePembayaran = ({
  onButtonClick,
  step,
  data,
  withoutTotal,
  title,
}: Props) => {
  const tw = useTailwind();
  const countMethod: number = 6;
  const navigation = useNavigation();
  const [method, setMethod] = useState<number[]>(Array(countMethod).fill(0));

  const handleMethodClick = (index: number) => () => {
    setMethod((prevMethod) => {
      const newMethod = prevMethod.map((value, i) => (i === index ? 1 : 0));
      return newMethod;
    });
  };

  return (
    <BackgroundWithHeader
      header={title ? title : 'Pembayaran'}
      subHeader="Pilih metode pembayaran"
      main
      bell
      onBackClick={() => navigation.goBack()}
      backButton>
      {/* step start */}
      {step && <StepCircleIndicator data={data} />}
      {/* step end */}

      {/* total start */}
      {!withoutTotal && (
        <View
          style={tw(
            'items-center justify-center bg-primary-light-blue rounded-lg py-2',
          )}>
          <InfoBlockDisplay
            title="Total Biaya"
            titleStyle="text-xs text-center text-white font-light"
            subTitle="Rp245.000"
            subTitleStyle="text-center text-lg text-white"
          />
        </View>
      )}
      {/* total end */}

      {/* metode start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        {/* si money start */}
        <View style={[tw('flex flex-col'), { gap: 15 }]}>
          <Text style={tw('text-cape-storm text-base font-semibold')}>
            Si Money
          </Text>
          <OptionWithStatusIndicator
            onPress={handleMethodClick(0)}
            selected={method[0] == 1}
            title="Si Money">
            <SIMoneySVG width={40} />
          </OptionWithStatusIndicator>
        </View>
        {/* si money end */}

        {/* virtual account start */}
        <View style={[tw('flex flex-col'), { gap: 15 }]}>
          <Text style={tw('text-cape-storm text-base font-semibold')}>
            Virtual Account
          </Text>
          <OptionWithStatusIndicator
            onPress={handleMethodClick(1)}
            selected={method[1] == 1}
            title="BRIVA">
            <Image source={require('../../assets/money/briva.png')} />
          </OptionWithStatusIndicator>
          <OptionWithStatusIndicator
            onPress={handleMethodClick(2)}
            selected={method[2] == 1}
            title="BNI Virtual Account">
            <Image source={require('../../assets/money/bni.png')} />
          </OptionWithStatusIndicator>
        </View>
        {/* virtual account end */}

        {/* e-wallet start */}
        <View style={[tw('flex flex-col'), { gap: 15 }]}>
          <Text style={tw('text-cape-storm text-base font-semibold')}>
            E-Wallet
          </Text>
          <OptionWithStatusIndicator
            onPress={handleMethodClick(3)}
            selected={method[3] == 1}
            title="Link Aja">
            <Image source={require('../../assets/money/link-aja.png')} />
          </OptionWithStatusIndicator>
          <OptionWithStatusIndicator
            onPress={handleMethodClick(4)}
            selected={method[4] == 1}
            title="Gopay">
            <Image source={require('../../assets/money/gopay.png')} />
          </OptionWithStatusIndicator>
          <OptionWithStatusIndicator
            onPress={handleMethodClick(5)}
            selected={method[5] == 1}
            title="OVO">
            <Image source={require('../../assets/money/ovo.png')} />
          </OptionWithStatusIndicator>
        </View>
        {/* e-wallet end */}
      </View>
      {/* metode end */}

      <View style={tw('mb-5')}>
        <ButtonComponent
          buttonTitle="Bayar"
          disable={!method.includes(1)}
          onNavigationClick={() => {
            if (method.includes(1)) {
              onButtonClick();
            }
          }}
        />
      </View>
    </BackgroundWithHeader>
  );
};

export default MetodePembayaran;
