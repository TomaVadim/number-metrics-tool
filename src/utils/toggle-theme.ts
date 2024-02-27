import { toggleDarkMode } from "./toggle-dark-mode";

export const toggleTheme = () => {
  const mode = localStorage.getItem("theme-mode");

  if (mode !== "dark") {
    toggleDarkMode("dark");
  } else {
    toggleDarkMode("light");
  }
};
