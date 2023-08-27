import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import TextInputField from '../Input/TextInputField';
import IconTextInputField from '../Input/IconTextInputField';
import { Icon } from '@rneui/themed';
import ButtonIcon from '../Button/ButtonIcon';
import ButtonComponent from '../Button/ButtonComponent';
import useFiles from '../../hooks/Files/useFiles';
import * as DocumentPicker from 'expo-document-picker';
import FilesCard from '../Card/FilesCard';

interface Props {
  onNavigationClick: () => void;
}

const Jadwal = ({ onNavigationClick }: Props) => {
  const tw = useTailwind();
  const [satpas, setSatpas] = useState<string>('');
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
    <View style={tw('flex-1')}>
      {/* note start */}
      <Text style={tw('text-white bg-golden p-3 text-center rounded-lg')}>
        Surat keterangan sehat jasmani dan rohani bisa didapat dari Puskesmas
        terdekat
      </Text>
      {/* note end */}

      {/* form start */}
      <View style={[tw('flex flex-col'), { gap: 7 }]}>
        <TextInputField
          label="Satpas SIM Terdekat"
          placeholder="Satpas di sekitar"
          value={satpas}
          onChangeValue={(value) => setSatpas(value)}
        />
        <View style={[tw('flex flex-col my-2'), { gap: 7 }]}>
          <Text style={tw('')}>Tanggal</Text>
          <IconTextInputField
            right
            placeholder="Pilih tanggal perpanjang SIM">
            <Icon
              name="calendar-alt"
              type="font-awesome-5"
              size={20}
              color={'#00A0F3'}
            />
          </IconTextInputField>
        </View>
        <View style={[tw('flex flex-col my-2'), { gap: 7 }]}>
          <Text style={tw('text-cape-storm')}>
            Surat keterangan sehat jasmani dan rohani
          </Text>
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
      </View>
      {/* form end */}

      {/* button start */}
      <View style={tw('absolute bottom-3 w-full')}>
        <ButtonComponent
          buttonTitle="Selanjutnya"
          onNavigationClick={onNavigationClick}
        />
      </View>
      {/* button end */}
    </View>
  );
};

export default Jadwal;
