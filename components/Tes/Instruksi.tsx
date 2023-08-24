import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';

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

interface Props {
  soal?: {
    num: string;
    text: string;
  }[];
}

const Instruksi = ({ soal = instruksi }: Props) => {
  const tw = useTailwind();

  return (
    <View style={[tw('flex flex-col'), { gap: 8 }]}>
      {!soal && (
        <Text style={tw('text-cape-storm font-normal text-lg')}>Instruksi</Text>
      )}
      <Text style={tw('text-cape-storm font-normal text-sm')}>
        {soal
          ? 'Ikuti Kriteria berikut :'
          : 'Sebelum pelaksaan ujian SIM online, harap membaca petunjuk berikut :'}
      </Text>
      <View style={[tw('flex flex-col ml-5 mx-3'), { gap: 5 }]}>
        {soal.map((item, index) => (
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
  );
};

export default Instruksi;
