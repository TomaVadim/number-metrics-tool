import { NODES } from "../constant/nodes";
import { findBiggestNumber } from "./find-biggest-number";
import { findLeastNumber } from "./find-least-number";
import { findMean } from "./find-mean";
import { findMedian } from "./find-median";
import { renderResult } from "./render-result";

const { buttonBiggest, buttonLeast, buttonMedian, buttonMean } = NODES;

export const handlerEvents = (array: number[]): void => {
  buttonLeast.addEventListener("click", () =>
    renderResult(findLeastNumber(array))
  );
  buttonBiggest.addEventListener("click", () =>
    renderResult(findBiggestNumber(array))
  );
  buttonMedian.addEventListener("click", () => renderResult(findMedian(array)));

  buttonMean.addEventListener("click", () => {
    renderResult(findMean(array));
  });

  console.log("Array from external function:", array);
};
