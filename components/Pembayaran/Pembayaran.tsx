import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../BackgroundWithHeader';
import InfoBlockDisplay from '../Info/InfoBlockDisplay';
import CardElevation from '../Card/CardElevation';
import { Divider, Icon } from '@rneui/themed';
import ButtonOutlineComponent from '../Button/ButtonOutlineComponent';
import StepCircleIndicator from '../Indicator/StepCircleIndicator';

interface Props {
  onButtonClick: () => void;
  data?: {
    title: string[];
    state: number[];
  };
  step?: boolean;
}

const Pembayaran = ({ onButtonClick, step, data }: Props) => {
  const tw = useTailwind();

  return (
    <BackgroundWithHeader
      header="Pembayaran"
      subHeader="Pilih metode pembayaran"
      main
      bell
      backButton>
      {step && <StepCircleIndicator data={data} />}
      <View
        style={tw(
          'bg-golden rounded-lg p-3 flex flex-row justify-between items-center',
        )}>
        <InfoBlockDisplay
          title="batas akhir pembayaran"
          titleStyle="text-white text-xs capitalize font-light"
          subTitle="Sabtu, 11 Desember 2021"
          subTitleStyle="text-white text-base font-bold"
          gap={2}
        />
        <Text style={tw('text-white font-bold text-base')}>23:59:58</Text>
      </View>
      <CardElevation>
        <View style={[tw('flex flex-col m-3'), { gap: 5 }]}>
          <View style={tw('flex flex-row justify-between items-center')}>
            <Text style={tw('text-cape-storm uppercase')}>BRIVA</Text>
            <Image source={require('../../assets/money/briva.png')} />
          </View>
          <Divider color="gray" />
          {/* virtual account start */}
          <View style={[tw('flex flex-col'), { gap: 2 }]}>
            <Text style={tw('text-disable font-light text-xs')}>
              Nomor Virtual Account
            </Text>
            <View
              style={[
                tw('flex flex-row items-center justify-start'),
                { gap: 5 },
              ]}>
              <Text style={tw('text-cape-storm font-bold text-base')}>
                8884564564465
              </Text>
              <TouchableOpacity
                style={[
                  tw('items-center justify-center flex flex-row'),
                  { gap: 3 },
                ]}>
                <Text
                  style={tw('text-primary-light-blue text-xs font-semibold')}>
                  Salin
                </Text>
                <Icon
                  name="copy"
                  type="font-awesome-5"
                  size={10}
                  color={'#00A0F3'}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* virtual account end */}

          {/* bayar start */}
          <View style={[tw('flex flex-col'), { gap: 2 }]}>
            <Text style={tw('text-disable font-light text-xs')}>
              Total Pembayaran
            </Text>
            <View
              style={[
                tw('flex flex-row items-center justify-start'),
                { gap: 5 },
              ]}>
              <Text style={tw('text-cape-storm font-bold text-base')}>
                Rp245.000
              </Text>
              <TouchableOpacity
                style={[
                  tw('items-center justify-center flex flex-row'),
                  { gap: 3 },
                ]}>
                <Text
                  style={tw('text-primary-light-blue text-xs font-semibold')}>
                  Salin
                </Text>
                <Icon
                  name="copy"
                  type="font-awesome-5"
                  size={10}
                  color={'#00A0F3'}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* bayar end */}
        </View>
      </CardElevation>

      {/* tutorial start */}
      <View style={[tw('flex flex-row'), { gap: 3 }]}>
        <Text style={tw('text-cape-storm text-sm')}>Bingung?</Text>
        <TouchableOpacity>
          <Text style={tw('text-primary-light-blue font-bold text-sm')}>
            Lihat Cara Pembayaran
          </Text>
        </TouchableOpacity>
      </View>
      {/* tutorial end */}

      {/* button start */}
      <View style={tw('absolute bottom-0 w-full')}>
        <ButtonOutlineComponent
          buttonTitle="Kembali ke beranda"
          onNavigationClick={onButtonClick}
        />
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default Pembayaran;
