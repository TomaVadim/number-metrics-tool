interface Props {
  message: string;
  targetElement: HTMLElement;
}

export const renderMessage = ({ message, targetElement }: Props): void => {
  const existedSpan = targetElement.querySelector("span") as HTMLSpanElement;

  if (existedSpan) {
    existedSpan.classList.remove("red-text");
    existedSpan.classList.add("green-text");
    existedSpan.textContent = message;

    return;
  }

  const span = document.createElement("span") as HTMLSpanElement;
  span.classList.add("red-text");
  span.textContent = message;
  targetElement.appendChild(span);
};
