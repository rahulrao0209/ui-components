/* Selecting the button container */
var buttonContainer = document.querySelector(".button-container");
/* Selecting all toasts */
var successToast = document.querySelector(".toast--success");
var warningToast = document.querySelector(".toast--warning");
var errorToast = document.querySelector(".toast--error");
var toggleToast = function (event) {
    var button = event.target.closest("button");
    var success = button === null || button === void 0 ? void 0 : button.classList.contains("button--success");
    var warning = button === null || button === void 0 ? void 0 : button.classList.contains("button--warning");
    var error = button === null || button === void 0 ? void 0 : button.classList.contains("button--error");
    if (button) {
        if (success) {
            warningToast === null || warningToast === void 0 ? void 0 : warningToast.classList.add("hide");
            errorToast === null || errorToast === void 0 ? void 0 : errorToast.classList.add("hide");
            successToast === null || successToast === void 0 ? void 0 : successToast.classList.toggle("hide");
        }
        if (warning) {
            errorToast === null || errorToast === void 0 ? void 0 : errorToast.classList.add("hide");
            successToast === null || successToast === void 0 ? void 0 : successToast.classList.add("hide");
            warningToast === null || warningToast === void 0 ? void 0 : warningToast.classList.toggle("hide");
        }
        if (error) {
            successToast === null || successToast === void 0 ? void 0 : successToast.classList.add("hide");
            warningToast === null || warningToast === void 0 ? void 0 : warningToast.classList.add("hide");
            errorToast === null || errorToast === void 0 ? void 0 : errorToast.classList.toggle("hide");
        }
    }
};
/* Add click event listeners to the buttons */
var init = function () {
    buttonContainer === null || buttonContainer === void 0 ? void 0 : buttonContainer.addEventListener("click", toggleToast);
    /* All toasts are initially hidden */
    successToast === null || successToast === void 0 ? void 0 : successToast.classList.add("hide");
    warningToast === null || warningToast === void 0 ? void 0 : warningToast.classList.add("hide");
    errorToast === null || errorToast === void 0 ? void 0 : errorToast.classList.add("hide");
};
init();
