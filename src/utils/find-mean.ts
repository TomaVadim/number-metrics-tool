export const findMean = (numbers: number[]): number => {
  const sum = numbers.reduce((initial, current) => initial + current, 0);

  return sum / numbers.length;
};
