import { countExecutionTime } from "./count-execution-time";

export const findMedian = countExecutionTime((numbers: number[]): number => {
  const sortedNumbers = numbers.slice().sort((a, b) => a - b);

  const length = sortedNumbers.length;

  if (length % 2 !== 0) {
    return sortedNumbers[Math.floor(length / 2)];
  } else {
    const middleIndex = length / 2;

    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
  }
});
