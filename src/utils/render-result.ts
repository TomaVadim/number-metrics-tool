import { NODES } from "../constant/nodes";

const { resultDiv } = NODES;

export const renderResult = (result: number): void => {
  resultDiv.textContent = `Result: ${result.toString()}`;
};
