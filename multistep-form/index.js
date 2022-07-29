/* Get all the form steps */
var step1 = document.querySelector("#form-step-1");
var step2 = document.querySelector("#form-step-2");
var step3 = document.querySelector("#form-step-3");
/* Get the buttons for each form step */
var nextStep1 = document.querySelector("#next-step-1");
var nextStep2 = document.querySelector("#next-step-2");
var prevStep2 = document.querySelector("#prev-step-2");
var prevStep3 = document.querySelector("#prev-step-3");
var animationClasses = ["disappear", "disappear-rev", "appear", "appear-rev"];
var removeAnimationClasses = function (step) {
    step === null || step === void 0 ? void 0 : step.classList.forEach(function (stepClass) {
        if (animationClasses.includes(stepClass))
            step.classList.remove(stepClass);
    });
};
var handleNext = function (event) {
    event.preventDefault();
    var stepClicked = parseInt(event.target.dataset.val);
    // On step 1
    if (stepClicked === 1) {
        removeAnimationClasses(step1);
        removeAnimationClasses(step2);
        step1 === null || step1 === void 0 ? void 0 : step1.classList.add("disappear");
        step1 === null || step1 === void 0 ? void 0 : step1.classList.add("disappeared"); // Add this class to make the previous form invisible
        step2 === null || step2 === void 0 ? void 0 : step2.classList.add("appear");
    }
    // On step 2
    if (stepClicked === 2) {
        removeAnimationClasses(step2);
        removeAnimationClasses(step3);
        step2 === null || step2 === void 0 ? void 0 : step2.classList.add("disappear");
        step2 === null || step2 === void 0 ? void 0 : step2.classList.add("disappeared");
        step3 === null || step3 === void 0 ? void 0 : step3.classList.add("appear");
    }
    console.log("val: ", stepClicked);
};
var handlePrev = function (event) {
    event.preventDefault();
    var stepClicked = parseInt(event.target.dataset.val);
    // On step 2
    if (stepClicked === 2) {
        removeAnimationClasses(step1);
        removeAnimationClasses(step2);
        step2 === null || step2 === void 0 ? void 0 : step2.classList.add("appear-rev");
        step1 === null || step1 === void 0 ? void 0 : step1.classList.add("disappear-rev");
    }
    // On step 3
    if (stepClicked === 3) {
        removeAnimationClasses(step2);
        removeAnimationClasses(step3);
        step2 === null || step2 === void 0 ? void 0 : step2.classList.add("disappear-rev");
        step3 === null || step3 === void 0 ? void 0 : step3.classList.add("appear-rev");
    }
};
/* Initialize event listeners */
var init = (function () {
    nextStep1 === null || nextStep1 === void 0 ? void 0 : nextStep1.addEventListener("click", handleNext);
    nextStep2 === null || nextStep2 === void 0 ? void 0 : nextStep2.addEventListener("click", handleNext);
    prevStep2 === null || prevStep2 === void 0 ? void 0 : prevStep2.addEventListener("click", handlePrev);
    prevStep3 === null || prevStep3 === void 0 ? void 0 : prevStep3.addEventListener("click", handlePrev);
})();
