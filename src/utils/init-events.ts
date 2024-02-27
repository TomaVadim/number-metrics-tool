import { initAccordionEvent } from "./init-accordion-event";
import { initLoadFileEvent } from "./init-load-file-event";
import { initToggleThemeEvent } from "./init-toggle-theme-event";

export const initEvents = () => {
  initToggleThemeEvent();
  initLoadFileEvent();
  initAccordionEvent();
};
