import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundWithHeader from '../../../../components/BackgroundWithHeader';
import { useNavigation } from '@react-navigation/native';
import { PerpanjangSIMNavigationProp } from '../../../../navigator/Identitas/PerpanjangSIMNavigationProp';
import useStepIndicator from '../../../../hooks/useStepIndicator';
import StepCircleIndicator from '../../../../components/Indicator/StepCircleIndicator';
import ButtonComponent from '../../../../components/Button/ButtonComponent';

const data = ['Pembayaran', 'Tes Psikologi', 'Pengambilan'];

const instruksi = [
  {
    num: 'a',
    text: 'Soal dalam bentuk pilihan ganda. Harap memilih jawaban yang paling tepat.',
  },
  {
    num: 'b',
    text: 'Soal harus diselesaikan sebelum waktu habis.',
  },
  {
    num: 'c',
    text: 'Waktu yang diberikan dalam pelaksanaan ujian adalah 15 menit dengan jumlah soal sebanyak 30 soal.',
  },
  {
    num: 'd',
    text: 'Jika waktu habis, maka ujian akan langsung diselesaikan dan semua jawaban akan dikirim.',
  },
  {
    num: 'e',
    text: 'Jika semua soal telah diselesaikan sebelum waktu habis, Anda dapat langsung mengirim jawaban.',
  },
  {
    num: 'f',
    text: 'Jika nilai tidak mencukupi, maka tes praktik tidak dapat dilakukan.',
  },
];

const InstruksiTesPsikologi = () => {
  const tw = useTailwind();
  const navigation = useNavigation<PerpanjangSIMNavigationProp>();
  const { title, state } = useStepIndicator(data, 1);

  return (
    <BackgroundWithHeader
      header="Tes Psikologi"
      subHeader="Silahkan baca instruksi pengerjaan"
      backButton
      onBackClick={() => navigation.goBack()}
      main
      bell>
      <StepCircleIndicator data={{ title, state }} />

      {/* instruksi start */}
      <View style={[tw('flex flex-col'), { gap: 8 }]}>
        <Text style={tw('text-cape-storm font-normal text-lg')}>Instruksi</Text>
        <Text style={tw('text-cape-storm font-normal text-sm')}>
          Sebelum pelaksaan ujian SIM online, harap membaca petunjuk berikut :
        </Text>
        <View style={[tw('flex flex-col ml-5 mx-3'), { gap: 5 }]}>
          {instruksi.map((item, index) => (
            <View
              style={[tw('flex flex-row'), { gap: 3 }]}
              key={index}>
              <Text style={tw('text-cape-storm font-normal text-sm')}>
                {item.num}
              </Text>
              <Text style={tw('text-cape-storm font-normal text-sm')}>
                {item.text}
              </Text>
            </View>
          ))}
        </View>
      </View>
      {/* instruksi end */}

      {/* button start */}
      <View style={tw('absolute bottom-0 w-full')}>
        <ButtonComponent
          buttonTitle="Mulai Tes Psikologi"
          onNavigationClick={() => navigation.navigate('SoalTesPsikologi')}
        />
      </View>
      {/* button end */}
    </BackgroundWithHeader>
  );
};

export default InstruksiTesPsikologi;
