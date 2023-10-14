import { gql, useQuery } from '@apollo/client';

export const GET_USER_AND_STNK = gql`
  query getUserandSTNK($userId: Int!) {
    user(where: { id: { equals: $userId } }) {
      name
      saldo
      kuota_subsidi
      ktp {
        stnk {
          nomor_polisi
          berlaku
          merk
          tipe
          model
          nama_pemilik
          nomor_rangka
          nomor_mesin
        }
      }
    }
  }
`;
