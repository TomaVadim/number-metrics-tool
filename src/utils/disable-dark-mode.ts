export const disableDarkMode = (): void => {
  document.body.classList.remove("dark");
  localStorage.setItem("theme-mode", "light");
};
