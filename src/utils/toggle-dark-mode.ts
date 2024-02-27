type Theme = "light" | "dark";

export const toggleDarkMode = (theme: Theme): void => {
  if (theme === "dark") {
    document.body.classList.add("dark");
    localStorage.setItem("theme-mode", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme-mode", "light");
  }
};
