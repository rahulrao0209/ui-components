/* Selecting all buttons */
var buttonContainer = document.querySelector(".button-container");
var successBtn = document.querySelector(".button--success");
var warningBtn = document.querySelector(".button--warning");
var errorBtn = document.querySelector(".button--error");
/* Selecting all toasts */
var successToast = document.querySelector(".toast--success");
var warningToast = document.querySelector(".toast--warning");
var errorToast = document.querySelector(".toast--error");
var toggleToast = function (event) {
    var button = event.target.closest("button");
    button && (successToast === null || successToast === void 0 ? void 0 : successToast.classList.toggle("hide"));
};
/* Add click event listeners to the buttons */
var init = function () {
    buttonContainer === null || buttonContainer === void 0 ? void 0 : buttonContainer.addEventListener("click", toggleToast);
};
init();
