import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../components/BackgroundWithHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  AjuanSubsidiRouteProp,
  SubsidiNavigationProps,
} from '../../navigator/Subsidi/SubsidiNavigationProps';
import { Icon } from '@rneui/themed';
import ButtonComponent from '../../components/Button/ButtonComponent';
import ButtonIcon from '../../components/Button/ButtonIcon';
import * as DocumentPicker from 'expo-document-picker';
import useFiles from '../../hooks/Files/useFiles';
import FilesCard from '../../components/Card/FilesCard';
import ajuan_subsidi from '../../api/rest/Subsidi/ajuan-subsidi';
import { useAuthContext } from '../../contexts/Auth/AuthContext';
import getCurrentDate from '../../utils/getCurrentDate';

const units = [
  'Kiloliter',
  'Hektoliter',
  'Dekaliter',
  'Liter',
  'Desiliter',
  'Sentiliter',
  'Mililiter',
];

const AjukanSubsidi = () => {
  const tw = useTailwind();
  const navigation = useNavigation<SubsidiNavigationProps>();
  const { __checkPermissions, __selectFile, singleFile } = useFiles();
  const [dropdownSubsidi, setDropdownSubsidi] = useState<boolean>(false);
  const [unit, setUnit] = useState<string>('Liter');
  const [jumlahSubsidi, setJumlahSubsidi] = useState<number>(0);
  const [alasan, setAlasan] = useState<string>('');
  const [files, setFiles] = useState<DocumentPicker.DocumentPickerResult[]>([]);
  const { getToken } = useAuthContext();

  const { params } = useRoute<AjuanSubsidiRouteProp>();

  const [nomorStnk, setNomorStnk] = useState<string>(params[0].nomor_stnk);
  const [kendaraan, setKendaraan] = useState<string>(
    `${params[0].merk} ${params[0].model}`,
  );
  const [dropdownKendaraan, setDropdownKendaraan] = useState<boolean>(false);

  const handleDropdownSubsidi = () => {
    setDropdownSubsidi(!dropdownSubsidi);
  };

  const handleDropdownKendaraan = () => {
    setDropdownKendaraan(!dropdownKendaraan);
  };

  const handleUnit = (unit: string) => {
    setUnit(unit);
    setDropdownSubsidi(false);
  };

  const handleKendaraan = (id: number) => {
    setKendaraan(`${params[id].merk} ${params[id].model}`);
    setNomorStnk(`${params[id].nomor_stnk}`);
    setDropdownKendaraan(false);
  };

  const handleAjuanSubsidi = async () => {
    const token = await getToken();
    const response = await ajuan_subsidi({
      alasan: alasan,
      jumlah: jumlahSubsidi,
      dokumen_pendukung: files,
      nomor_stnk: nomorStnk,
      tanggal_pengajuan: getCurrentDate(),
      access_token: token as string,
    });

    if (response.statusCode === 201) {
      navigation.navigate('SuccessAjukanSubsidi');
    }
    console.log('response in ui');
    console.log(response);
  };

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

      {/* kendaraan start */}
      <View style={[tw('flex flex-col'), { gap: 8 }]}>
        <Text style={tw('text-cape-storm')}>Kendaraan</Text>
        <View style={tw('flex flex-row justify-between items-center')}>
          <Text
            style={[
              tw(
                'bg-secondary-white px-4 py-3 text-sm rounded-lg flex-1 border-disable',
              ),
              { borderWidth: 1 },
            ]}>
            {kendaraan}
          </Text>
          <TouchableOpacity
            onPress={handleDropdownKendaraan}
            style={[
              tw(
                'absolute right-0 flex flex-row items-center justify-center px-3 border-disable h-full',
              ),
              { gap: 3 },
            ]}>
            <Icon
              name={dropdownKendaraan ? 'chevron-up' : 'chevron-down'}
              type="entypo"
              size={20}
              color={'#00A0F3'}
            />
          </TouchableOpacity>
        </View>
        {dropdownKendaraan && (
          <FlatList
            nestedScrollEnabled
            data={params}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => handleKendaraan(index)}
                style={[
                  tw('border-disable px-3 py-2'),
                  { borderBottomWidth: 1 },
                ]}>
                <Text>{`${item.merk} ${item.model}`}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            style={[
              tw(
                'absolute flex flex-1 bg-secondary-white w-full rounded-lg border-disable z-10',
              ),
              { borderWidth: 1, top: 72 },
            ]}
          />
        )}
      </View>
      {/* kendaraan start */}

      {/* jumlah subsidi start */}
      <View style={[tw('flex flex-col'), { gap: 8 }]}>
        <Text style={tw('text-cape-storm')}>Jumlah Subsidi</Text>
        <View style={tw('flex flex-row justify-between items-center')}>
          <TextInput
            onChange={(e) => setJumlahSubsidi(Number(e.nativeEvent.text))}
            style={[
              tw(
                'bg-secondary-white px-4 py-2 text-sm rounded-lg flex-1 border-disable',
              ),
              { borderWidth: 1 },
            ]}
            placeholder="Contoh: 25"
          />
          <TouchableOpacity
            onPress={handleDropdownSubsidi}
            style={[
              tw(
                'absolute right-0 flex flex-row items-center justify-center px-3 border-l-2 border-disable h-full',
              ),
              { gap: 3 },
            ]}>
            <Text style={tw('text-cape-storm text-sm')}>{unit}</Text>
            <Icon
              name={dropdownSubsidi ? 'chevron-up' : 'chevron-down'}
              type="entypo"
              size={20}
              color={'#00A0F3'}
            />
          </TouchableOpacity>
        </View>
        {dropdownSubsidi && (
          <FlatList
            nestedScrollEnabled
            data={units}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleUnit(item)}
                style={[
                  tw('border-disable px-3 py-2'),
                  { borderBottomWidth: 1 },
                ]}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            style={[
              tw(
                'absolute flex flex-1 bg-secondary-white w-full rounded-lg border-disable z-10',
              ),
              { height: 150, borderWidth: 1, top: 72 },
            ]}
          />
        )}
      </View>
      {/* jumlah subsidi end */}

      {/* alasan start */}
      <View style={[tw('flex flex-col'), { gap: 8 }]}>
        <Text style={tw('text-cape-storm')}>Alasan</Text>
        <View style={tw('flex flex-row')}>
          <TextInput
            onChange={(e) => setAlasan(e.nativeEvent.text)}
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
      <View style={tw('mb-5')}>
        <ButtonComponent
          buttonTitle="Ajukan"
          onNavigationClick={() => {
            handleAjuanSubsidi();
          }}
        />
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default AjukanSubsidi;
