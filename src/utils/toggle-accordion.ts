export const toggleAccordion = () => {
  const accordionContent = document.querySelector(
    ".accordion-content"
  ) as HTMLDivElement;

  accordionContent.classList.toggle("show");
  if (accordionContent.classList.contains("show")) {
    accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
  } else {
    accordionContent.style.maxHeight = "0";
  }
};
