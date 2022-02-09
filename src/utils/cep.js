export const formatZipcode = (value) =>
  value.slice(0, 9).replace(/(\d{5})(\d{1,3})/g, "$1-$2");

export const zipcodeOnlyNumbers = (value) => value.replace("-", "");
