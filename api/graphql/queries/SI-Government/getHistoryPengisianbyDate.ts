import { gql, useQuery } from '@apollo/client';

export const GET_HISTORY_PENGISIAN_BY_DATE = gql`
  query {
    April_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-04", lt: "2023-05" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Mei_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-05", lt: "2023-06" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Juni_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-06", lt: "2023-07" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Juli_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-07", lt: "2023-08" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Agustus_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-08", lt: "2023-09" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    September_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-09", lt: "2023-10" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
  }
`;
