import { renderAlertMessage } from "./render-alert-message";

export const showTimeFunctionAllExecution = <T extends (...args: any[]) => any>(
  funcs: T[]
) => {
  return (...args: Parameters<T>): void => {
    const startTime = Date.now();
    funcs.forEach((func) => func(...args));
    const executionTime = Date.now() - startTime;

    renderAlertMessage({
      message: `Execution time: ${executionTime}ms`,
      status: "success",
    });
  };
};
