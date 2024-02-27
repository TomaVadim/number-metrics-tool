import { initEvents } from "./utils/init-events";
import { THEME_MODE } from "./constant/theme-mode";
import { toggleDarkMode } from "./utils/toggle-dark-mode";

import "./style.css";

if (THEME_MODE === "dark") {
  toggleDarkMode("dark");
}

initEvents();
