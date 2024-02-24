import { countExecutionTime } from "./count-execution-time";

export const findBiggestNumber = countExecutionTime(
  (array: number[]): number => {
    let biggestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > biggestNumber) {
        biggestNumber = array[i];
      }
    }

    return biggestNumber;
  }
);
