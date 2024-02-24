import { NODES } from "./constant/nodes";
import { THEME_MODE } from "./constant/theme-mode";
import { handlerEvents } from "./utils/handler-events";
import { readFileContents } from "./utils/read-file-contents";
import { renderAlertMessage } from "./utils/render-alert-message";
import { disableDarkMode, enableDarkMode } from "./utils/handle-change-theme";

import "./style.css";

const { mode } = THEME_MODE;
const { input, themeToggleButton, accordionBtn, accordionContent } = NODES;

themeToggleButton.addEventListener("click", () => {
  const mode = localStorage.getItem("theme-mode");

  if (mode !== "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

if (mode === "dark") {
  enableDarkMode();
}

input.addEventListener("change", function (e) {
  const file = (e.target as HTMLInputElement).files?.[0];

  if (!file) {
    return;
  }

  readFileContents(file)
    .then((array) => {
      if (array.length === 1 && array[0] === 0) {
        renderAlertMessage({
          message: "File is empty",
          status: "error",
        });
        return array;
      } else {
        renderAlertMessage({
          message: "File read successfully",
          status: "success",
        });
      }
      return array;
    })
    .then((numbersArray) => {
      handlerEvents(numbersArray);
    })
    .catch((error) => {
      console.error("Error reading file:", error);

      renderAlertMessage({
        message: "Error reading file",
        status: "error",
      });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  accordionBtn.addEventListener("click", function () {
    accordionContent.classList.toggle("show");
    if (accordionContent.classList.contains("show")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = "0";
    }
  });
});
