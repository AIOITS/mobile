export type SubsidiStackParamList = {
  Subsidi: undefined;
  RiwayatPengisian: HistoryPengisianFromSTNK;
  AjukanSubsidi: undefined;
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
