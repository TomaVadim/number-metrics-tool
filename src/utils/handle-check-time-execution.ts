import { showTimeFunctionExecution } from "./show-time-function-execution";
import { arrayCountFunctions } from "../constant/array-count-functions";

export const handleCheckTimeExecution = (array: number[]) => {
  const counters = document.querySelectorAll(
    ".counter"
  ) as NodeListOf<HTMLSpanElement>;

  counters.forEach((counter, index) => {
    counter.addEventListener("click", () => {
      const func = arrayCountFunctions[index];
      showTimeFunctionExecution(func)(array);
    });
  });
};
