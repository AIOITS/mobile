import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../BackgroundWithHeader';
import InfoBlockDisplay from '../Info/InfoBlockDisplay';
import SIMoneySVG from '../../assets/money/si-money.svg';
import OptionWithStatusIndicator from '../Info/OptionWithStatusIndicator';
import ButtonComponent from '../Button/ButtonComponent';
import StepCircleIndicator from '../Indicator/StepCircleIndicator';

interface Props {
  step?: boolean;
  onButtonClick: () => void;
  data?: {
    title: string[];
    state: number[];
  };
}

const MetodePembayaran = ({ onButtonClick, step, data }: Props) => {
  const tw = useTailwind();
  const [selected, setSelected] = useState<boolean>(true);

  return (
    <BackgroundWithHeader
      header="Pembayaran"
      subHeader="Pilih metode pembayaran"
      main
      bell
      backButton>
      {/* step start */}
      {step && <StepCircleIndicator data={data} />}
      {/* step end */}

      {/* total start */}
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
      {/* total end */}

      {/* metode start */}
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        {/* si money start */}
        <View style={[tw('flex flex-col'), { gap: 15 }]}>
          <Text style={tw('text-cape-storm text-base font-semibold')}>
            Si Money
          </Text>
          <OptionWithStatusIndicator title="Si Money">
            <SIMoneySVG width={40} />
          </OptionWithStatusIndicator>
        </View>
        {/* si money end */}

        {/* virtual account start */}
        <View style={[tw('flex flex-col'), { gap: 15 }]}>
          <Text style={tw('text-cape-storm text-base font-semibold')}>
            Virtual Account
          </Text>
          <OptionWithStatusIndicator title="BRIVA">
            <Image source={require('../../assets/money/briva.png')} />
          </OptionWithStatusIndicator>
          <OptionWithStatusIndicator title="BNI Virtual Account">
            <Image source={require('../../assets/money/bni.png')} />
          </OptionWithStatusIndicator>
        </View>
        {/* virtual account end */}

        {/* e-wallet start */}
        <View style={[tw('flex flex-col'), { gap: 15 }]}>
          <Text style={tw('text-cape-storm text-base font-semibold')}>
            E-Wallet
          </Text>
          <OptionWithStatusIndicator title="Link Aja">
            <Image source={require('../../assets/money/link-aja.png')} />
          </OptionWithStatusIndicator>
          <OptionWithStatusIndicator title="Gopay">
            <Image source={require('../../assets/money/gopay.png')} />
          </OptionWithStatusIndicator>
          <OptionWithStatusIndicator title="OVO">
            <Image source={require('../../assets/money/ovo.png')} />
          </OptionWithStatusIndicator>
        </View>
        {/* e-wallet end */}
      </View>
      {/* metode end */}

      <View style={tw('mb-5')}>
        <ButtonComponent
          buttonTitle="Bayar"
          onNavigationClick={onButtonClick}
        />
      </View>
    </BackgroundWithHeader>
  );
};

export default MetodePembayaran;
