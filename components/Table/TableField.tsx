import { normalize } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useTailwind } from 'tailwind-rn';
import CustomCell from './CustomCell';
import calculate from '../../utils/calculationUtils';

interface Props {
  pkb: PKB;
}

const TableField = ({
  pkb: {
    bbknb_pokok,
    bbknb_sanksi,
    PKB_pokok,
    PKB_sanksi,
    swdkllj_pokok,
    swdkllj_sanksi,
    administrasi_stnk_pokok,
    administrasi_stnk_sanksi,
    administrasi_tnkb_pokok,
    administrasi_tnkb_sanksi,
  },
}: Props) => {
  const tw = useTailwind();
  const header = ['', 'Pokok', 'Sanksi Adm', 'Jumlah'];
  const data = [
    [
      <CustomCell title="BBKNB" />,
      `${bbknb_pokok}`,
      `${bbknb_sanksi}`,
      `${calculate(bbknb_pokok, bbknb_sanksi)}`,
    ],
    [
      <CustomCell title="PKB" />,
      `${PKB_pokok}`,
      `${PKB_sanksi}`,
      `${calculate(PKB_pokok, PKB_sanksi)}`,
    ],
    [
      <CustomCell title="SWDKLLJ" />,
      `${swdkllj_pokok}`,
      `${swdkllj_sanksi}`,
      `${calculate(swdkllj_pokok, swdkllj_sanksi)}`,
    ],
    [
      <CustomCell title="Biaya Adm STNK" />,
      `${administrasi_stnk_pokok}`,
      `${administrasi_stnk_sanksi}`,
      `${calculate(administrasi_stnk_pokok, administrasi_stnk_sanksi)}`,
    ],
    [
      <CustomCell title="Biaya Adm TNKB" />,
      `${administrasi_tnkb_pokok}`,
      `${administrasi_tnkb_sanksi}`,
      `${calculate(administrasi_tnkb_pokok, administrasi_tnkb_sanksi)}`,
    ],
  ];
  const total = [
    [
      'Jumlah',
      `${calculate(
        bbknb_pokok,
        PKB_pokok,
        swdkllj_pokok,
        administrasi_stnk_pokok,
        administrasi_tnkb_pokok,
      )}`,
      `${calculate(
        bbknb_sanksi,
        PKB_sanksi,
        swdkllj_sanksi,
        administrasi_stnk_sanksi,
        administrasi_tnkb_sanksi,
      )}`,
      `${calculate(
        bbknb_sanksi,
        PKB_sanksi,
        swdkllj_sanksi,
        administrasi_stnk_sanksi,
        administrasi_tnkb_sanksi,
        bbknb_pokok,
        PKB_pokok,
        swdkllj_pokok,
        administrasi_stnk_pokok,
        administrasi_tnkb_pokok,
      )}`,
    ],
  ];

  return (
    <View style={tw('')}>
      <Table>
        <Row
          data={header}
          textStyle={[
            tw('uppercase font-semibold text-center my-1'),
            { fontSize: normalize(12) },
          ]}
        />
        <Rows
          data={data}
          textStyle={tw('text-center my-1')}
        />
        <Rows
          data={total}
          textStyle={[
            tw('uppercase font-semibold text-center text-white'),
            { fontSize: normalize(12) },
          ]}
          style={tw('bg-golden py-1')}
        />
      </Table>
    </View>
  );
};

export default TableField;
