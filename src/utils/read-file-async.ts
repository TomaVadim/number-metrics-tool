export const readFileAsync = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      const contents = event.target?.result as string;
      resolve(contents);
    };

    reader.onerror = (event) => {
      reject(event);
    };

    reader.readAsText(file);
  });
};
