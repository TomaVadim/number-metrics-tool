import { findBiggestNumber } from "./find-biggest-number";
import { findLargestDecreasingSequence } from "./find-largest-decreasing-sequence";
import { findLargestIncreasingSequence } from "./find-largest-increasing-sequence";
import { findLeastNumber } from "./find-least-number";
import { findMean } from "./find-mean";
import { findMedian } from "./find-median";
import { renderResult } from "./render-result";

export const handleEvents = (array: number[]) => {
  const buttonLeast = document.getElementById("smallest") as HTMLButtonElement;
  const buttonBiggest = document.getElementById("biggest") as HTMLButtonElement;
  const buttonMedian = document.getElementById("median") as HTMLButtonElement;
  const buttonMean = document.getElementById("mean") as HTMLButtonElement;
  const buttonIncreasingSequence = document.getElementById(
    "increasing-sequence"
  ) as HTMLButtonElement;
  const buttonDecreasingSequence = document.getElementById(
    "decreasing-sequence"
  ) as HTMLButtonElement;

  buttonLeast.addEventListener("click", () =>
    renderResult(findLeastNumber(array))
  );
  buttonBiggest.addEventListener("click", () =>
    renderResult(findBiggestNumber(array))
  );
  buttonMedian.addEventListener("click", () => renderResult(findMedian(array)));
  buttonMean.addEventListener("click", () => renderResult(findMean(array)));
  buttonIncreasingSequence.addEventListener("click", () =>
    renderResult(findLargestIncreasingSequence(array))
  );
  buttonDecreasingSequence.addEventListener("click", () =>
    renderResult(findLargestDecreasingSequence(array))
  );
};
