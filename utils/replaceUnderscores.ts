const replaceUnderscores = (input: string) => {
  const formattedString = input.replace(/_/g, ' ');
  return formattedString;
};

export default replaceUnderscores;
