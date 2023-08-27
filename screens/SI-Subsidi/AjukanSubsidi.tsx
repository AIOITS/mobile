import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { SubsidiNavigationProps } from '../../navigator/Subsidi/SubsidiNavigationProps';
import { Icon } from '@rneui/themed';
import ButtonComponent from '../../components/Button/ButtonComponent';
import ButtonIcon from '../../components/Button/ButtonIcon';
import * as DocumentPicker from 'expo-document-picker';
import useFiles from '../../hooks/Files/useFiles';
import FilesCard from '../../components/Card/FilesCard';

const AjukanSubsidi = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SubsidiNavigationProps>();
  const [files, setFiles] = useState<DocumentPicker.DocumentPickerResult[]>([]);
  const { __checkPermissions, __selectFile, singleFile } = useFiles();

  useEffect(() => {
    if (singleFile) {
      setFiles([...files, singleFile]);
    }

    return () => {
      setFiles([]);
    };
  }, [singleFile]);

  return (
    <BackgroundWithHeader
      header="Ajukan Subsidi"
      subHeader="Isi data untuk pengajuan penambahan subsidi"
      main
      bell
      backButton
      onBackClick={() => navigation.goBack()}>
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
            style={[
              tw(
                'bg-secondary-white px-4 py-2 text-sm rounded-lg flex-1 border-disable',
              ),
              { borderWidth: 1 },
            ]}
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
            style={[
              tw(
                'bg-secondary-white px-4 py-3 text-sm rounded-lg flex-1 border-disable',
              ),
              { borderWidth: 1 },
            ]}
            placeholder="Alasan pengajuan penambahan subsidi"
          />
        </View>
      </View>
      {/* alasan end */}

      {/* dokumen start */}
      <View style={[tw('flex flex-col'), { gap: 8 }]}>
        <Text style={tw('text-cape-storm')}>Dokumen pendukung</Text>
        {files.length > 0 && (
          <FilesCard
            files={files}
            setFiles={setFiles}
          />
        )}
        <ButtonIcon
          titleButton="Tambahkan file"
          onButtonClick={() => {
            __checkPermissions();
            __selectFile();
          }}>
          <Icon
            name={'upload'}
            type="font-awesome"
            size={25}
            color="#00A0F3"
          />
        </ButtonIcon>
      </View>
      {/* dokumen end */}

      {/* button start */}
      <View style={tw('absolute bottom-3 right-0 left-0')}>
        <ButtonComponent
          buttonTitle="Ajukan"
          onNavigationClick={() => navigation.navigate('SuccessAjukanSubsidi')}
        />
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default AjukanSubsidi;
