import { store } from "../../configs/store";
import { readFileContents } from "../read-file-contents";
import { renderAlertMessage } from "../render-alert-message";

export const uploadFile = async (e: Event): Promise<void> => {
  const file = (e.target as HTMLInputElement).files?.[0];

  if (!file) {
    return;
  }

  try {
    const array = await readFileContents(file);

    if (array.length === 0) {
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

      store.numbers = array;
    }
  } catch (error) {
    renderAlertMessage({
      message: "Error reading file",
      status: "error",
    });
  }
};
