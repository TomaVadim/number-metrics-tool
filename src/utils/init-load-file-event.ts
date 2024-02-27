import { handleLoadFile } from "./handle-load-file";

export const initLoadFileEvent = (): void => {
  const inputLoadFile = document.getElementById("input_load_file");
  inputLoadFile?.addEventListener("change", handleLoadFile);
};
