import { countExecutionTime } from "./count-execution-time";

export const findMean = countExecutionTime((numbers: number[]): number => {
  const sum = numbers.reduce((initial, current) => initial + current, 0);

  const mean = sum / numbers.length;

  return mean;
});
