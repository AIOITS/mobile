import { gql, useQuery } from '@apollo/client';

export const GET_STNK_AND_PKB = gql`
  query getSTNKandPKB($userId: Int!) {
    user(where: { id: { equals: $userId } }) {
      ktp {
        nama
        stnk {
          merk
          kuota_subsidi
          tipe
          nomor_mesin
          nomor_rangka
          nomor_stnk
          nomor_polisi
          nama_pemilik
          nomor_bpkb
          alamat
          bahan_bakar
          berlaku
          jenis
          model
          tahun_pembuatan
          isi_silinder
          warna
          warna_tnkb
          tahun_registrasi
          nomor_registrasi
          kode_lokasi
          nomor_urut_pendaftaran
          pkb {
            nomor_pkb
            status_pajak
            bbknb_pokok
            bbknb_sanksi
            PKB_pokok
            PKB_sanksi
            swdkllj_pokok
            swdkllj_sanksi
            administrasi_stnk_pokok
            administrasi_stnk_sanksi
            administrasi_tnkb_pokok
            administrasi_tnkb_sanksi
          }
        }
      }
    }
  }
`;
