import { renderAlertMessage } from "./render-alert-message";

export const countExecutionTime = <
  ArgumentsType extends (...args: any[]) => any
>(
  func: ArgumentsType
) => {
  return (...args: Parameters<ArgumentsType>): ReturnType<ArgumentsType> => {
    const initialTimer = Date.now();
    const result = func(...args);
    const executionTime = Date.now() - initialTimer;
    renderAlertMessage({
      status: "success",
      message: `Execution time: ${executionTime}ms`,
    });

    return result;
  };
};
