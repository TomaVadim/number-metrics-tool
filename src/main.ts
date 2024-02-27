import { store } from "./configs/store";
import { THEME_MODE } from "./constant/theme-mode";
import { enableDarkMode } from "./utils/enable-dark-mode";
import { initThemeButtonEvent } from "./utils/init-theme-button-event/init-theme-button-event";
import { initInputLoadFileEvent } from "./utils/init-input-load-file-event/init-input-load-file-event";
import { initAccordionButtonEvent } from "./utils/init-accordion-button-event/init-accordion-button-event";
import { initCalcButtonsEvent } from "./utils/init-calc-buttons-event/init-calc-buttons-event";

import "./style.css";

if (THEME_MODE === "dark") {
  enableDarkMode();
}

const initEvents = () => {
  initThemeButtonEvent();
  initInputLoadFileEvent();
  initAccordionButtonEvent();
  initCalcButtonsEvent(store.numbers);
};

initEvents();
