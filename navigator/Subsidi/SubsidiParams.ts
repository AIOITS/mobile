export type SubsidiStackParamList = {
  Subsidi: undefined;
  RiwayatPengisian: undefined;
  AjukanSubsidi: undefined;
  SuccessAjukanSubsidi: undefined;
  RiwayatPengajuan: undefined;
  DetailRiwayatPengajuan: {
    tanggal: string;
    jumlah: string;
    status: string;
  };
};

export type SubsidiScreenParamList =
  | 'Subsidi'
  | 'RiwayatPengisian'
  | 'AjukanSubsidi'
  | 'SuccessAjukanSubsidi'
  | 'RiwayatPengajuan'
  | 'DetailRiwayatPengajuan';
