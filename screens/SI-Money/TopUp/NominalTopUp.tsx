import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../components/BackgroundWithHeader';
import CardElevation from '../../../components/Card/CardElevation';
import { Divider } from '@rneui/themed';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { MoneyNavigationProps } from '../../../navigator/Money/MoneyNavigationProp';

const NominalTopUp = () => {
  const tw = useTailwind();
  const numbers = ['10', '25', '50', '100', '250', '500'];
  const navigation = useNavigation<MoneyNavigationProps>();

  return (
    <BackgroundWithHeader
      header="Top Up"
      subHeader="Pilin nominal top up"
      bell
      backButton
      main>
      <View
        style={[
          tw('flex flex-row flex-wrap justify-between items-center'),
          { gap: 10 },
        ]}>
        {/* nominal card start */}
        {numbers.map((number, index) => (
          <View style={{ width: 105 }}>
            <CardElevation
              key={index}
              cardStyle="w-full py-6">
              <Text
                style={tw(
                  'text-cape-storm font-semibold text-xs absolute top-1 left-1',
                )}>
                Rp
              </Text>
              <View style={tw('flex flex-row items-end justify-center')}>
                <Text style={tw('text-cape-storm font-semibold text-base')}>
                  {number}
                </Text>
                <Text style={tw('text-cape-storm font-semibold text-sm')}>
                  .000
                </Text>
              </View>
            </CardElevation>
          </View>
        ))}
        {/* nominal card end */}
      </View>

      {/* divider start */}
      <View style={tw('my-5 flex flex-row justify-center items-center')}>
        <Text
          style={tw(
            'text-center text-disable absolute -mt-2 bg-white z-10 px-2',
          )}>
          atau
        </Text>
        <Divider
          color="gray"
          style={tw('w-full')}
        />
      </View>
      {/* divider end */}

      {/* input start */}
      <TextInput
        placeholder="Tulis Nominal Top Up"
        style={[
          tw('bg-secondary-white border-disable py-2 rounded-lg px-4'),
          { borderWidth: 1 },
        ]}
      />
      {/* input end */}

      {/* button start */}
      <View style={tw('absolute bottom-3 right-0 left-0 w-full')}>
        <ButtonComponent
          buttonTitle="Bayar"
          onNavigationClick={() => navigation.navigate('BayarTopUp')}
        />
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default NominalTopUp;
