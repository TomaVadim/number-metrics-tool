import { handleCheckExecutionAllFunctions } from "./handle-check-execution-all-functions";
import { handleCheckTimeExecution } from "./handle-check-time-execution";
import { handleEvents } from "./handle-events";
import { readFileContents } from "./read-file-contents";
import { renderAlertMessage } from "./render-alert-message";

export const handleLoadFile = async (e: Event): Promise<void> => {
  const file = (e.target as HTMLInputElement).files?.[0];

  if (!file) {
    return;
  }

  try {
    const array = await readFileContents(file);
    const isArrayEmpty = array.length === 1 && array[0] === 0;

    if (isArrayEmpty) {
      renderAlertMessage({
        message: "File is empty",
        status: "error",
      });

      return;
    } else {
      renderAlertMessage({
        message: "File read successfully",
        status: "success",
      });

      handleEvents(array);

      handleCheckTimeExecution(array);

      handleCheckExecutionAllFunctions(array);
    }
  } catch (error) {
    renderAlertMessage({
      message: "Error reading file",
      status: "error",
    });
  }
};
