import { NODES } from "../constant/nodes";
import { renderMessage } from "./render-message";

const { inputArea } = NODES;

export const readFileContents = (file: File): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    renderMessage({
      message: "Reading file...",
      targetElement: inputArea,
    });

    reader.onload = function (event: ProgressEvent<FileReader>) {
      const contents = event.target?.result as string;
      const numbersArray = contents.split("\n").map(Number);

      renderMessage({
        message: "File read successfully",
        targetElement: inputArea,
      });

      resolve(numbersArray);
    };

    reader.onerror = function (event) {
      reject(event);
    };

    reader.readAsText(file);
  });
};
