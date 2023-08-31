const handleDate = (inputDate: string) => {
  const date = new Date(inputDate);

  const formattedDate = date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formattedDate;
};

export default handleDate;
