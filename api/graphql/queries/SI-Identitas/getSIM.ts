import { gql, useQuery } from '@apollo/client';

export const GET_SIM = gql`
  query getSIM($userId: Int!) {
    user(where: { id: { equals: $userId } }) {
      ktp {
        tempat_lahir
        tanggal_lahir
        jenis_kelamin
        golongan_darah
        sim {
          uid
          nomor_sim
          jenis_sim
          nama
          alamat
          rt
          rw
          kelurahan_desa
          kecamatan
          kabupaten
          pekerjaan
          kabupaten_terbit
          tanggal_terbit
          penerbit
          berlaku_sampai
        }
      }
    }
  }
`;
