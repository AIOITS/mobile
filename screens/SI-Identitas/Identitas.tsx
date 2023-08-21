import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import SmartSimSVG from '../../assets/smart-sim.svg';
import CardElevation from '../../components/Card/CardElevation';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { IdentitasNavigationProps } from '../../navigator/Identitas/IdentitasNavigationProps';

const Identitas = () => {
  const tw = useTailwind();
  const navigation = useNavigation<IdentitasNavigationProps>();

  return (
    <BackgroundWithHeader
      main
      backButton
      header="Si Identitas"
      subHeader="Smart SIM Identitas"
      bell>
      <View style={[tw('flex flex-col'), { gap: 10 }]}>
        {/* card item start */}
        <CardElevation onCardClick={() => navigation.navigate('DetailSim')}>
          <SmartSimSVG width={'100%'} />
        </CardElevation>
        {/* card item end */}

        {/* add card start */}
        <TouchableOpacity style={[{ height: 170, overflow: 'hidden' }]}>
          <View
            style={[
              {
                height: 170,
                borderWidth: 1,
                borderColor: '#00A0F3',
                borderStyle: 'dashed',
              },
              tw('items-center justify-center'),
            ]}>
            <Icon
              name="plus-circle"
              type="font-awesome"
              size={25}
              color={'#00A0F3'}
            />
            <Text
              style={tw(
                'text-center text-primary-light-blue text-sm font-light',
              )}>
              Tambah Sim Baru
            </Text>
          </View>
        </TouchableOpacity>
        {/* add card end */}
      </View>
    </BackgroundWithHeader>
  );
};

export default Identitas;
