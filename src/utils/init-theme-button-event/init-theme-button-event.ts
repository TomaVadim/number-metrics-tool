import { toggleTheme } from "../toggle-theme";

export const initThemeButtonEvent = (): void => {
  const themeToggleButton = document.querySelector(".toggle-theme");

  themeToggleButton?.addEventListener("click", toggleTheme);
};
