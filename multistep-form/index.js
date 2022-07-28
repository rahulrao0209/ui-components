/* Get all the form steps */
var step1 = document.querySelector("#form-step-1");
var step2 = document.querySelector("#form-step-2");
var step3 = document.querySelector("#form-step-3");
/* Get the buttons for each form step */
var nextStep1 = document.querySelector("#next-step-1");
var nextStep2 = document.querySelector("#next-step-2");
var prevStep2 = document.querySelector("#prev-step-2");
var prevStep3 = document.querySelector("#prev-step-3");
var handleNext = function (event) {
    event.preventDefault();
};
/* Initialize event listeners */
var init = (function () {
    nextStep1 === null || nextStep1 === void 0 ? void 0 : nextStep1.addEventListener("click", handleNext);
})();
