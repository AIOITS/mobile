export type KendaraanStackParamList = {
  Kendaraan: undefined;
  DetailSTNK: STNKandPKB;
  MetodePembayaranPajak: undefined;
  BayarPajak: undefined;
  SuccessBayarPajak: undefined;
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
  MetodeBayarGantiPlat: undefined;
  BayarGantiPlat: undefined;
  SuccessGantiPlat: undefined;
  CekKendaraan: undefined;
};

export type KendaraanScreenParamList =
  | 'Kendaraan'
  | 'DetailSTNK'
  | 'MetodePembayaranPajak'
  | 'BayarPajak'
  | 'SuccessBayarPajak'
  | 'GantiPlat'
  | 'TambahSTNK'
  | 'SuccessTambahSTNK'
  | 'PinjamkanSTNK'
  | 'RiwayatPinjamSTNK'
  | 'ConfirmPinjamSTNK'
  | 'SuccessPinjamSTNK'
  | 'DetailRiwayatSTNK'
  | 'MetodeBayarGantiPlat'
  | 'BayarGantiPlat'
  | 'SuccessGantiPlat'
  | 'CekKendaraan';
