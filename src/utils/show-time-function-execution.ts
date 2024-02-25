import { renderAlertMessage } from "./render-alert-message";

export const showTimeFunctionExecution = <T extends (...args: any[]) => any>(
  func: T
) => {
  return (...args: Parameters<T>): void => {
    const startTime = Date.now();
    func(...args);
    const executionTime = Date.now() - startTime;

    renderAlertMessage({
      message: `Execution time: ${executionTime}ms`,
      status: "success",
    });
  };
};
