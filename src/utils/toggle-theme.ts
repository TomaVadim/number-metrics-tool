import { disableDarkMode } from "./disable-dark-mode";
import { enableDarkMode } from "./enable-dark-mode";

export const toggleTheme = () => {
  const mode = localStorage.getItem("theme-mode");

  if (mode !== "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};
