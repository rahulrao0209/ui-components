/* Selecting the button container */
const buttonContainer = document.querySelector(".button-container");

/* Selecting all toasts */
const successToast = document.querySelector(".toast--success");
const warningToast = document.querySelector(".toast--warning");
const errorToast = document.querySelector(".toast--error");

/* Selecting close buttons on all the toasts */
const closeButtons: NodeListOf<HTMLButtonElement | HTMLSpanElement> =
  document.querySelectorAll(".close-btn");
console.log("close buttons: ", closeButtons);

const toggleToast = (event) => {
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

const hideToast = (
  event: Event & { target: HTMLButtonElement | HTMLSpanElement }
) => {
  const button = event.target.closest("button");

  const success = button?.classList.contains("close-btn--success");
  const warning = button?.classList.contains("close-btn--warning");
  const error = button?.classList.contains("close-btn--error");

  if (success) {
    successToast?.classList.add("hide");
  }

  if (warning) {
    warningToast?.classList.add("hide");
  }

  if (error) {
    errorToast?.classList.add("hide");
  }
};

/* Add click event listeners to the buttons */
const init = () => {
  buttonContainer?.addEventListener("click", toggleToast);

  /* All toasts are initially hidden */
  successToast?.classList.add("hide");
  warningToast?.classList.add("hide");
  errorToast?.classList.add("hide");

  /* Add event listeners to the toast close buttons */
  closeButtons.forEach((button: any) => {
    button.addEventListener("click", hideToast);
  });
};

init();
