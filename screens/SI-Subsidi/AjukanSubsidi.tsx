import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundLargeHeader from '../../components/BackgroundLargeHeader';
import { useNavigation } from '@react-navigation/native';
import { SubsidiNavigationProps } from '../../navigator/Subsidi/SubsidiNavigationProps';
import { Icon } from '@rneui/themed';
import ButtonBlueComponent from '../../components/Button/ButtonBlueComponent';

const AjukanSubsidi = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SubsidiNavigationProps>();

  return (
    <BackgroundLargeHeader
      header="Ajukan Subsidi"
      subHeader="Isi data untuk pengajuan penambahan subsidi"
      main
      bell
      backButton
      onBackClick={() => navigation.goBack()}
      backgroundImageSource={require('../../assets/bg/bg-medium.png')}>
      {/* text start */}
      <Text style={tw('text-disable text-sm')}>
        Dokumen pengajuan dapat berupa Surat Keterangan Tidak Mampu, atau
        dokumen lain yang dapat menguatkan alasan pengajuan
      </Text>
      {/* text end */}

      {/* jumlah subsidi start */}
      <View style={[tw('flex flex-col'), { gap: 8 }]}>
        <Text style={tw('text-cape-storm')}>Jumlah Subsidi</Text>
        <View style={tw('flex flex-row')}>
          <TextInput
            style={tw('bg-secondary-white px-4 py-2 text-sm rounded-lg flex-1')}
            placeholder="Contoh: 25"
          />
          {/* TODO: make drop down */}
        </View>
      </View>
      {/* jumlah subsidi end */}

      {/* alasan start */}
      <View style={[tw('flex flex-col'), { gap: 8 }]}>
        <Text style={tw('text-cape-storm')}>Jumlah Subsidi</Text>
        <View style={tw('flex flex-row')}>
          <TextInput
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
            style={tw('bg-secondary-white px-4 py-3 text-sm rounded-lg flex-1')}
            placeholder="Alasan pengajuan penambahan subsidi"
          />
        </View>
      </View>
      {/* alasan end */}

      {/* dokumen start */}
      <View style={[tw('flex flex-col'), { gap: 8 }]}>
        <Text style={tw('text-cape-storm')}>Dokumen pendukung</Text>
        <TouchableOpacity
          style={[tw('bg-secondary-white px-4 py-3 rounded-lg')]}>
          <View
            style={[tw('flex flex-row items-start justify-start'), { gap: 5 }]}>
            <Icon
              name={'upload'}
              type="font-awesome"
              size={25}
              color="#00A0F3"
            />
            <Text>Tambahkan file</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* dokumen end */}

      {/* button start */}
      <View style={tw('absolute bottom-0 right-0 left-0')}>
        <ButtonBlueComponent
          buttonTitle="Ajukan"
          onNavigationClick={() => navigation.navigate('SuccessAjukanSubsidi')}
        />
      </View>
      {/* button end */}
    </BackgroundLargeHeader>
  );
};

export default AjukanSubsidi;
