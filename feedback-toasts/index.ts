/* Selecting the button container */
const buttonContainer = document.querySelector(".button-container");

/* Selecting all toasts */
const successToast = document.querySelector(".toast--success");
const warningToast = document.querySelector(".toast--warning");
const errorToast = document.querySelector(".toast--error");

const toggleToast = (event: any) => {
  const button = event.target.closest("button");

  const success = button?.classList.contains("button--success");
  const warning = button?.classList.contains("button--warning");
  const error = button?.classList.contains("button--error");

  if (button) {
    if (success) {
      warningToast?.classList.add("hide");
      errorToast?.classList.add("hide");

      successToast?.classList.toggle("hide");
    }

    if (warning) {
      errorToast?.classList.add("hide");
      successToast?.classList.add("hide");

      warningToast?.classList.toggle("hide");
    }

    if (error) {
      successToast?.classList.add("hide");
      warningToast?.classList.add("hide");

      errorToast?.classList.toggle("hide");
    }
  }
};

/* Add click event listeners to the buttons */
const init = () => {
  buttonContainer?.addEventListener("click", toggleToast);

  /* All toasts are initially hidden */
  successToast?.classList.add("hide");
  warningToast?.classList.add("hide");
  errorToast?.classList.add("hide");
};

init();
