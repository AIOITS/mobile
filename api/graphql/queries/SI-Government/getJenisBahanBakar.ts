import { gql, useQuery } from '@apollo/client';

export const GET_JENIS_BAHAN_BAKAR = gql`
  query {
    jumlah_bbm: history_pengisian_groupby(by: bbm_id, _sum: { jumlah: true }) {
      bbm_id
      _sum {
        jumlah
      }
    }
    jenis_bbm: bbm(where: { id: { gte: 0 } }) {
      id
      name
    }
  }
`;
