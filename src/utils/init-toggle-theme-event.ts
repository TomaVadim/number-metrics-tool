import { toggleTheme } from "./toggle-theme";

export const initToggleThemeEvent = (): void => {
  const themeToggleButton = document.querySelector(".toggle-theme");
  themeToggleButton?.addEventListener("click", toggleTheme);
};
