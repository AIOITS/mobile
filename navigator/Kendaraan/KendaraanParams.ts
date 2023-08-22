export type KendaraanStackParamList = {
  Kendaraan: undefined;
  DetailSTNK: undefined;
  BayarPajak: undefined;
  GantiPlat: undefined;
  TambahSTNK: undefined;
  SuccessTambahSTNK: undefined;
  PinjamkanSTNK: undefined;
  RiwayatPinjamSTNK: undefined;
  ConfirmPinjamSTNK: {
    nama: string;
    alamat: string;
  };
  SuccessPinjamSTNK: undefined;
  DetailRiwayatSTNK: {
    nama: string;
    alamat: string;
    mesin: string;
    pengajuan: string;
    status: number;
  };
};

export type KendaraanScreenParamList =
  | 'Kendaraan'
  | 'DetailSTNK'
  | 'BayarPajak'
  | 'GantiPlat'
  | 'TambahSTNK'
  | 'SuccessTambahSTNK'
  | 'PinjamkanSTNK'
  | 'RiwayatPinjamSTNK'
  | 'ConfirmPinjamSTNK'
  | 'SuccessPinjamSTNK'
  | 'DetailRiwayatSTNK';
