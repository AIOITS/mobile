type RegisterInput = {
  name?: string;
  email?: string;
  phone?: string;
  password: string;
  nik: string;
};

type ErrorResponse = {
  statusCode: number;
  message: string;
};

type RegisterSuccessResponse = {
  statusCode: number;
  data: {
    id: number;
    access_token: string;
  };
};

type HistoryPengisianSuccessResponse = {
  statusCode: number;
  data: {
    id: number;
    kategori_pengisian: string;
    nama_spbu: string;
    jumlah: number;
    createdAt: string;
    updatedAt: string;
    user_id: number;
    nomor_stnk: string;
  };
};

type HistoryPengisianInput = {
  kategori_pengisian: string;
  nama_spbu: string;
  jumlah: number;
  nomor_stnk: string;
  access_token: string;
};

type AjuanSubsidiSuccessResponse = {
  statusCode: number;
  data: {
    id: number;
    jumlah: number;
    alasan: string;
    dokumen_pendukung: string[];
    tanggal_pengajuan: string;
    status_pengajuan: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
  };
};

type AjuanSubsidiInput = {
  jumlah: number;
  alasan: string;
  nomor_stnk: string;
  dokumen_pendukung: DocumentPicker.DocumentPickerResult[];
  tanggal_pengajuan: string;
  access_token: string;
};

type LoginInput = {
  password: string;
  email?: string | undefined;
  phone?: string | undefined;
};

type AjuanSubsidi = {
  status_pengajuan: string;
  id: string;
  alasan: string;
  dokumen_pendukung: {
    name: string;
    url: string;
  }[];
  tanggal_pengajuan: string;
  status_pengajuan: string;
  createdAt: string;
  updatedAt: string;
  jumlah: number;
};

type KTP = {
  nama: string;
};

type HistoryPengisian = {
  kategori_pengisian: string;
  spbu: {
    name: string;
  };
  jumlah: number;
  createdAt: string;
  updatedAt: string;
  nomor_stnk: string;
};

type HistoryEmoney = {
  kategori_pengisian: string;
  nama_spbu: string;
  createdAt: string;
  jumlah: string;
};

type STNKInPengisian = {
  nomor_stnk: string;
  merk: string;
  tipe: string;
  nomor_polisi: string;
  model: string;
  isi_silinder: string;
  nomor_mesin: string;
  nomor_rangka: string;
  berlaku: string;
};

type STNKAll = {
  kuota_subsidi: number;
  nomor_stnk: string;
  nomor_polisi: string;
  nama_pemilik: string;
  nomor_bpkb: string;
  alamat: string;
  bahan_bakar: string;
  berlaku: string;
  jenis: string;
  model: string;
  tahun_pembuatan: string;
  warna: string;
  warna_tnkb: string;
  tahun_registrasi: string;
  nomor_registrasi: string;
  kode_lokasi: string;
  nomor_urut_pendaftaran: string;
};

type STNKDetail = STNKAll & STNKInPengisian;

type HistoryPengisianFromSTNK = STNKInPengisian & {
  history_pengisian: HistoryPengisian[];
};

enum JenisSIM {
  a = 'a',
  a_umum = 'a_umum',
  b1 = 'b1',
  b2 = 'b2',
  b2_umum = 'b2_umum',
  c = 'c',
  d = 'd',
  e = 'e',
  f = 'f',
  g = 'g',
  i = 'i',
  x = 'x',
}

type SIM = {
  uid: string;
  nomor_sim: string;
  jenis_sim: JenisSIM;
  nama: string;
  alamat: string;
  rt: string;
  rw: string;
  kelurahan_desa: string;
  kecamatan: string;
  kabupaten: string;
  pekerjaan: string;
  kabupaten_terbit: string;
  tanggal_terbit: string;
  penerbit: string;
  berlaku_sampai: string;
};

type KTPInSIM = {
  tempat_lahir: string;
  tanggal_lahir: string;
  golongan_darah: string;
  jenis_kelamin: string;
};

type PKB = {
  nomor_pkb: string;
  status_pajak: boolean;
  bbknb_pokok: number;
  bbknb_sanksi: number;
  PKB_pokok: number;
  PKB_sanksi: number;
  swdkllj_pokok: number;
  swdkllj_sanksi: number;
  administrasi_stnk_pokok: number;
  administrasi_stnk_sanksi: number;
  administrasi_tnkb_pokok: number;
  administrasi_tnkb_sanksi: number;
};

type STNKandPKB = STNKDetail & {
  pkb: PKB;
};

type STNKandName = STNKInPengisian & {
  nama: string;
  berlaku: string;
};

type UserData = {
  name: string;
  saldo: number;
};

type STNK = {
  nomor_polisi: string;
  nomor_mesin: string;
  berlaku: string;
  kuota_subsidi: number;
  merk: string;
  tipe: string;
  model: string;
  nomor_rangka: string;
};

type HistoryPengisianByDate = {
  labels: string[];
  subsidi: number[];
  non_subsidi: number[];
};

type JenisBahanBakar = {
  name: string[];
  jumlah: number[];
};
