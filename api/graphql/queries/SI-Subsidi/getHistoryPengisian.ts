import { gql, useQuery } from '@apollo/client';

export const GET_HISTORY_PENGISIAN = gql`
  query getHistoryPengisian($userId: Int!) {
    history_pengisian(where: { user_id: { equals: $userId } }) {
      kategori_pengisian
      nama_spbu
      jumlah
      createdAt
      updatedAt
      nomor_stnk
    }
  }
`;
