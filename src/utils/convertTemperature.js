export const convertFahrenToCels = (value) => {
  return Math.floor((value - 32) / 1.8);
};

export const convertCelsToFahren = (val) => {
  return Math.floor((val*1.8) + 32);
};