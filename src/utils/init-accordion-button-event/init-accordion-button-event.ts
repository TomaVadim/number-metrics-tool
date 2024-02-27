import { toggleAccordion } from "../toggle-accordion";

export const initAccordionButtonEvent = (): void => {
  const accordionBtn = document.querySelector(".accordion-btn");

  accordionBtn?.addEventListener("click", toggleAccordion);
};
