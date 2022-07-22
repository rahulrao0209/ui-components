/* Selecting the button container */
var buttonContainer = document.querySelector(".button-container");
/* Selecting all toasts */
var successToast = document.querySelector(".toast--success");
var warningToast = document.querySelector(".toast--warning");
var errorToast = document.querySelector(".toast--error");
/* Selecting close buttons on all the toasts */
var closeButtons = document.querySelectorAll(".close-btn");
console.log("close buttons: ", closeButtons);
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
var hideToast = function (event) {
    var button = event.target.closest("button");
    var success = button === null || button === void 0 ? void 0 : button.classList.contains("close-btn--success");
    var warning = button === null || button === void 0 ? void 0 : button.classList.contains("close-btn--warning");
    var error = button === null || button === void 0 ? void 0 : button.classList.contains("close-btn--error");
    if (success) {
        successToast === null || successToast === void 0 ? void 0 : successToast.classList.add("hide");
    }
    if (warning) {
        warningToast === null || warningToast === void 0 ? void 0 : warningToast.classList.add("hide");
    }
    if (error) {
        errorToast === null || errorToast === void 0 ? void 0 : errorToast.classList.add("hide");
    }
};
/* Add click event listeners to the buttons */
var init = function () {
    buttonContainer === null || buttonContainer === void 0 ? void 0 : buttonContainer.addEventListener("click", toggleToast);
    /* All toasts are initially hidden */
    successToast === null || successToast === void 0 ? void 0 : successToast.classList.add("hide");
    warningToast === null || warningToast === void 0 ? void 0 : warningToast.classList.add("hide");
    errorToast === null || errorToast === void 0 ? void 0 : errorToast.classList.add("hide");
    /* Add event listeners to the toast close buttons */
    closeButtons.forEach(function (button) {
        button.addEventListener("click", hideToast);
    });
};
init();
