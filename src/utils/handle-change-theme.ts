export const enableDarkMode = (): void => {
  document.body.classList.add("dark");

  localStorage.setItem("theme-mode", "dark");
};

export const disableDarkMode = (): void => {
  document.body.classList.remove("dark");

  localStorage.setItem("theme-mode", "light");
};
