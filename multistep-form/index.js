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
    var stepClicked = parseInt(event.target.dataset.val);
    // On step 1
    if (stepClicked === 1) {
        step1 === null || step1 === void 0 ? void 0 : step1.classList.remove("disappear-rev");
        step2 === null || step2 === void 0 ? void 0 : step2.classList.remove("appear-rev");
        step1 === null || step1 === void 0 ? void 0 : step1.classList.add("disappear");
        step1 === null || step1 === void 0 ? void 0 : step1.classList.add("disappeared"); // Add this class to make the previous form invisible
        step2 === null || step2 === void 0 ? void 0 : step2.classList.add("appear");
    }
    // On step 2
    console.log("val: ", stepClicked);
};
var handlePrev = function (event) {
    event.preventDefault();
    var stepClicked = parseInt(event.target.dataset.val);
    // On step 2
    if (stepClicked === 2) {
        step1 === null || step1 === void 0 ? void 0 : step1.classList.remove("disappear");
        step2 === null || step2 === void 0 ? void 0 : step2.classList.remove("appear");
        step2 === null || step2 === void 0 ? void 0 : step2.classList.add("appear-rev");
        step1 === null || step1 === void 0 ? void 0 : step1.classList.add("disappear-rev");
    }
    // On step 3
};
/* Initialize event listeners */
var init = (function () {
    nextStep1 === null || nextStep1 === void 0 ? void 0 : nextStep1.addEventListener("click", handleNext);
    nextStep2 === null || nextStep2 === void 0 ? void 0 : nextStep2.addEventListener("click", handleNext);
    prevStep2 === null || prevStep2 === void 0 ? void 0 : prevStep2.addEventListener("click", handlePrev);
    prevStep3 === null || prevStep3 === void 0 ? void 0 : prevStep3.addEventListener("click", handlePrev);
})();
