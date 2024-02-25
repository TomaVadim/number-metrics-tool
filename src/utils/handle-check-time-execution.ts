import { showTimeFunctionExecution } from "./count-time-function-execution";
import { findLeastNumber } from "./find-least-number";
import { findBiggestNumber } from "./find-biggest-number";
import { findMedian } from "./find-median";
import { findMean } from "./find-mean";
import { findLargestIncreasingSequence } from "./find-largest-increasing-sequence";
import { findLargestDecreasingSequence } from "./find-largest-decreasing-sequence";

export const handleCheckTimeExecution = (array: number[]) => {
  const counters = document.querySelectorAll(
    ".counter"
  ) as NodeListOf<HTMLSpanElement>;
  const arrayOfFunctions = [
    findLeastNumber,
    findBiggestNumber,
    findMedian,
    findMean,
    findLargestIncreasingSequence,
    findLargestDecreasingSequence,
  ];

  counters.forEach((counter, index) => {
    counter.addEventListener("click", () => {
      const func = arrayOfFunctions[index];
      showTimeFunctionExecution(func)(array);
    });
  });
};
