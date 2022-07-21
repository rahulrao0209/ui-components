/* Selecting all buttons */
const buttonContainer = document.querySelector(".button-container");
const successBtn = document.querySelector(".button--success");
const warningBtn = document.querySelector(".button--warning");
const errorBtn = document.querySelector(".button--error");

/* Selecting all toasts */
const successToast = document.querySelector(".toast--success");
const warningToast = document.querySelector(".toast--warning");
const errorToast = document.querySelector(".toast--error");

const toggleToast = (event: any) => {
  const button = event.target.closest("button");
  button && successToast?.classList.toggle("hide");
};

/* Add click event listeners to the buttons */
const init = () => {
  buttonContainer?.addEventListener("click", toggleToast);
};

init();
