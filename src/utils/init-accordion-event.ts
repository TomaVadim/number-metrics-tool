import { toggleAccordion } from "./toggle-accordion";

export const initAccordionEvent = (): void => {
  const accordionButton = document.querySelector(".accordion-btn");

  accordionButton?.addEventListener("click", toggleAccordion);
};
