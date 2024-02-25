interface Props {
  message: string;
  status: "success" | "error";
}

export const renderAlertMessage = ({ message, status }: Props): void => {
  const existedAlert = document.querySelector(".alert") as HTMLDivElement;

  if (existedAlert) {
    existedAlert.remove();
  }

  const alert = document.createElement("div");

  if (status === "error") {
    alert.classList.add("alert", "alert-danger");
  } else {
    alert.classList.add("alert", "alert-success");
  }

  alert.textContent = message;
  document.body.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 5000);
};
