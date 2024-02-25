export const enableDarkMode = (): void => {
  document.body.classList.add("dark");
  localStorage.setItem("theme-mode", "dark");
};
