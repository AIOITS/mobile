import { gql, useQuery } from '@apollo/client';

export const GET_STNK_NAME = gql`
  query getSTNKName($userId: Int!) {
    user(where: { id: { equals: $userId } }) {
      ktp {
        nama
        stnk {
          merk
          tipe
          nomor_mesin
          nomor_rangka
          isi_silinder
          berlaku
        }
      }
    }
  }
`;
