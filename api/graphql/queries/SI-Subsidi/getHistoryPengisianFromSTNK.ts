import { gql } from '@apollo/client';

export const GET_HISTORY_PENGISIAN_FROM_STNK = gql`
  query getHistoryPengisianFromSTNK($userId: Int!) {
    user(where: { id: { equals: $userId } }) {
      ktp {
        stnk {
          merk
          berlaku
          tipe
          isi_silinder
          nomor_mesin
          nomor_polisi
          model
          nomor_rangka
          history_pengisian {
            kategori_pengisian
            spbu {
              name
            }
            jumlah
            createdAt
            updatedAt
            nomor_stnk
          }
        }
      }
    }
  }
`;
