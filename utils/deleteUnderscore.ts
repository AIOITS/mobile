const deleteUnderscore = (input: string) => {
  const parts = input.split('_');

  const bulan = parts[0];
  const tahun = parts[1];

  const formatted = `${bulan} ${tahun}`;

  return formatted;
};

export default deleteUnderscore;
