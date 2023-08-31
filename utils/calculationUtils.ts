const calculate = (...angka: number[]): number => {
  return angka.reduce((total, nilai) => total + nilai, 0);
};

export default calculate;
