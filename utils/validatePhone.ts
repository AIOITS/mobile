const validatePhone = (phone: string): boolean => {
  // Nomor telepon di Indonesia biasanya dimulai dengan 08 atau +62
  const phonePattern = /^(08|\+628?)[0-9]{8,11}$/;
  return phonePattern.test(phone);
};

export default validatePhone;
