import { countExecutionTime } from "./count-execution-time";

export const findLeastNumber = countExecutionTime((array: number[]): number => {
  let lesserNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < lesserNumber) {
      lesserNumber = array[i];
    }
  }

  return lesserNumber;
});
