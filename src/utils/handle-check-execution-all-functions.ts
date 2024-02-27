import { arrayCountFunctions } from "../constant/array-count-functions";
import { showTimeFunctionAllExecution } from "./show-time-execution-all-functions";

export const handleCheckExecutionAllFunctions = (array: number[]) => {
  const button = document.getElementById("all-functions");

  button?.addEventListener("click", () => {
    const executeFunctions = showTimeFunctionAllExecution(arrayCountFunctions);

    executeFunctions(array);
  });
};
