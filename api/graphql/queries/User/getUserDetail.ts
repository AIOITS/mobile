import { gql, useQuery } from '@apollo/client';

export const GET_USER_DETAIL = gql`
  query GetUserDetails($id: ID) {
    user(where: { id: { equals: $id } }) {
      nik
      ktp {
        nama
        tempat_lahir
        tanggal_lahir
        alamat
        rt
        rw
        kelurahan_desa
        kecamatan
        kabupaten_kota
        provinsi
        golongan_darah
        agama
        status_perkawinan
        pekerjaan
        kewarganegaraan
      }
    }
  }
`;
