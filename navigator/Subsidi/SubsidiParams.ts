export type SubsidiStackParamList = {
  Subsidi: undefined;
  RiwayatPengisian: HistoryPengisianFromSTNK;
  AjukanSubsidi: undefined;
  SuccessAjukanSubsidi: undefined;
  RiwayatPengajuan: undefined;
  DetailRiwayatPengajuan: AjuanSubsidi;
};

export type SubsidiScreenParamList =
  | 'Subsidi'
  | 'RiwayatPengisian'
  | 'AjukanSubsidi'
  | 'SuccessAjukanSubsidi'
  | 'RiwayatPengajuan'
  | 'DetailRiwayatPengajuan';
