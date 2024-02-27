import { readFileAsync } from "./read-file-async";
import { renderMessage } from "./render-message";

export const readFileContents = async (file: File): Promise<number[]> => {
  const inputArea = document.querySelector(".input_area") as HTMLDivElement;

  try {
    renderMessage({
      message: "Reading file...",
      targetElement: inputArea,
    });

    const contents = await readFileAsync(file);

    const numbersArray = contents.length
      ? contents.split("\n").map(Number)
      : [];

    renderMessage({
      message: "File read successfully",
      targetElement: inputArea,
    });

    return numbersArray;
  } catch (error) {
    throw new Error("Error reading file");
  }
};
