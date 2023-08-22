import { normalize } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useTailwind } from 'tailwind-rn';
import CustomCell from './CustomCell';

const TableField = () => {
  const tw = useTailwind();
  const header = ['', 'Pokok', 'Sanksi Adm', 'Jumlah'];
  const data = [
    [<CustomCell title="BBKNB" />, '0', '0', '0'],
    [<CustomCell title="PKB" />, '210.000', '0', '210.000'],
    [<CustomCell title="SWDKLLJ" />, '35.000', '0', '35.000'],
    [<CustomCell title="Biaya Adm STNK" />, '0', '0', '0'],
    [<CustomCell title="Biaya Adm TNKB" />, '0', '0', '0'],
  ];
  const total = [['Jumlah', '0', '0', '245.000']];

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
