import { THEME_MODE } from "./constant/theme-mode";
import { toggleTheme } from "./utils/toggle-theme";
import { enableDarkMode } from "./utils/enable-dark-mode";
import { handleLoadFile } from "./utils/handle-load-file";
import { toggleAccordion } from "./utils/toggle-accordion";

import "./style.css";

const accordionBtn = document.querySelector(
  ".accordion-btn"
) as HTMLButtonElement;
const themeToggleButton = document.querySelector(
  ".toggle-theme"
) as HTMLButtonElement;
const inputLoadFile = document.getElementById(
  "input_load_file"
) as HTMLInputElement;

if (THEME_MODE === "dark") {
  enableDarkMode();
}

themeToggleButton.addEventListener("click", toggleTheme);
inputLoadFile.addEventListener("change", handleLoadFile);
accordionBtn.addEventListener("click", toggleAccordion);
