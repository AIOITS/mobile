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

type LoginInput = {
  password: string;
  email?: string | undefined;
  phone?: string | undefined;
};

type AjuanSubsidi = {
  status_pengajuan: string;
  id: string;
  alasan: string;
  dokumen_pendukung: string[] | undefined;
  tanggal_pengajuan: string;
  status_pengajuan: string;
  createdAt: string;
  updatedAt: string;
  jumlah: number;
};

type HistoryPengisian = {
  kategori_pengisian: string;
  nama_spbu: string;
  jumlah: number;
  createdAt: string;
  updatedAt: string;
  nomor_stnk: string;
};

type STNKInPengisian = {
  merk: string;
  tipe: string;
  isi_silinder: string;
  nomor_mesin: string;
  nomor_rangka: string;
};

type STNKAll = {
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
  nomor_pkb: string;
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
};
