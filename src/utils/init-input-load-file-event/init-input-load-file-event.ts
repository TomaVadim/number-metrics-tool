import { uploadFile } from "../upload-file/upload-file";

export const initInputLoadFileEvent = (): void => {
  const inputLoadFile = document.getElementById("input_load_file");

  inputLoadFile?.addEventListener("change", uploadFile);
};
