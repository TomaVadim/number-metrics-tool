import { findBiggestNumber } from "../utils/find-biggest-number";
import { findLargestDecreasingSequence } from "../utils/find-largest-decreasing-sequence";
import { findLargestIncreasingSequence } from "../utils/find-largest-increasing-sequence";
import { findLeastNumber } from "../utils/find-least-number";
import { findMean } from "../utils/find-mean";
import { findMedian } from "../utils/find-median";

export const calcFunctions = {
  smallest: findLeastNumber,
  biggest: findBiggestNumber,
  median: findMedian,
  mean: findMean,
  "increasing-sequence": findLargestIncreasingSequence,
  "decreasing-sequence": findLargestDecreasingSequence,
};

export type CalcType = keyof typeof calcFunctions;
