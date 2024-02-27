export const initCountersEvent = (array: number[]): void => {
  const buttons = document.querySelector(".buttons");

  buttons?.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest(".counter")) {
      console.log(event.target);
    }
  });
};
