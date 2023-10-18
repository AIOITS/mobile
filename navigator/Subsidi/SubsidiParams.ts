export type SubsidiStackParamList = {
  Subsidi: undefined;
  RiwayatPengisian: HistoryPengisianFromSTNK;
  AjukanSubsidi: {
    nomor_stnk: string;
    nomor_polisi: string;
    merk: string;
    model: string;
  }[];
  SuccessAjukanSubsidi: undefined;
  RiwayatPengajuan: HistoryPengisianFromSTNK[];
  DetailRiwayatPengajuan: AjuanSubsidi & {
    kendaraan: string;
  };
};

export type SubsidiScreenParamList =
  | 'Subsidi'
  | 'RiwayatPengisian'
  | 'AjukanSubsidi'
  | 'SuccessAjukanSubsidi'
  | 'RiwayatPengajuan'
  | 'DetailRiwayatPengajuan';
