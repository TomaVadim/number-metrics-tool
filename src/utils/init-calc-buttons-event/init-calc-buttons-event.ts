import { CalcType, calcFunctions } from "../../configs/calc-functions";
import { showTimeFunctionExecution } from "../show-time-function-execution";

export const initCalcButtonsEvent = (array: number[]): void => {
  const buttons = document.querySelector(".buttons");

  buttons?.addEventListener("click", (event) => {
    const calcType = (event.target as HTMLButtonElement).dataset.calcType;
    const executionType = (event.target as HTMLButtonElement).dataset
      .executionType;
    console.log(event.target);
    console.log(calcType);

    if (calcType) {
      calcFunctions[calcType as CalcType](array);
      console.log(calcFunctions[calcType as CalcType]);
      return;
    }

    if (executionType) {
      showTimeFunctionExecution(calcFunctions[executionType as CalcType])(
        array
      );

      return;
    }
  });
};
