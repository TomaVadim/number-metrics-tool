export const renderResult = (result: number | number[]): void => {
  const resultWindow = document.getElementById("result");

  if (!resultWindow) return;

  if (Array.isArray(result)) {
    resultWindow.textContent = `Result: ${result}`;
    resultWindow.style.fontSize = "14px";

    return;
  }

  resultWindow.style.fontSize = "30px";
  resultWindow.textContent = `Result: ${result}`;
};
