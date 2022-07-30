/* Get all the form steps */
var step1 = document.querySelector("#form-step-1");
var step2 = document.querySelector("#form-step-2");
var step3 = document.querySelector("#form-step-3");
/* Get the buttons for each form step */
var nextStep1 = document.querySelector("#next-step-1");
var nextStep2 = document.querySelector("#next-step-2");
var prevStep2 = document.querySelector("#prev-step-2");
var prevStep3 = document.querySelector("#prev-step-3");
var animationClasses = ["scale-down", "scale-up", "slide-in", "slide-out"];
var removeAnimationClasses = function (step) {
    step === null || step === void 0 ? void 0 : step.classList.forEach(function (stepClass) {
        if (animationClasses.includes(stepClass))
            step.classList.remove(stepClass);
    });
};
var handleNext = function (event) {
    event.preventDefault();
    var stepClicked = parseInt(event.target.dataset.val);
    // Step 1 next button clicked
    if (stepClicked === 1) {
        removeAnimationClasses(step1);
        removeAnimationClasses(step2);
        step1 === null || step1 === void 0 ? void 0 : step1.classList.add("scale-down");
        step1 === null || step1 === void 0 ? void 0 : step1.classList.add("disappeared"); // Add this class to make the previous form invisible
        step2 === null || step2 === void 0 ? void 0 : step2.classList.add("slide-in");
    }
    // Step 2 next button clicked
    if (stepClicked === 2) {
        removeAnimationClasses(step2);
        removeAnimationClasses(step3);
        step2 === null || step2 === void 0 ? void 0 : step2.classList.add("scale-down");
        step2 === null || step2 === void 0 ? void 0 : step2.classList.add("disappeared"); // Add this class to make the previous form invisible
        step3 === null || step3 === void 0 ? void 0 : step3.classList.add("slide-in");
    }
    updateProgress(stepClicked, "next");
};
var handlePrev = function (event) {
    event.preventDefault();
    var stepClicked = parseInt(event.target.dataset.val);
    // Step 2 previous button clicked
    if (stepClicked === 2) {
        removeAnimationClasses(step1);
        removeAnimationClasses(step2);
        step2 === null || step2 === void 0 ? void 0 : step2.classList.add("slide-out");
        step1 === null || step1 === void 0 ? void 0 : step1.classList.add("scale-up");
    }
    // Step 3 previous button clicked
    if (stepClicked === 3) {
        removeAnimationClasses(step2);
        removeAnimationClasses(step3);
        step2 === null || step2 === void 0 ? void 0 : step2.classList.add("scale-up");
        step3 === null || step3 === void 0 ? void 0 : step3.classList.add("slide-out");
    }
    updateProgress(stepClicked, "prev");
};
/* Handle the progress bar indicator as we move through the  steps */
var updateProgress = function (step, action) {
    if (action === "next") {
        var progressLine = document.querySelector(".progress-bar--step".concat(step, " > span:nth-child(2)"));
        var progressIndicator = document.querySelector(".progress-bar--step".concat(step + 1, " > span:nth-child(1)"));
        var progressLabel = document.querySelector(".progress-bar--step".concat(step + 1, " > span:nth-child(3)"));
        progressLine.style.backgroundColor = "#34a853";
        progressIndicator.style.backgroundColor = "#34a853";
        progressLabel.style.color = "#34a853";
    }
    if (action === "prev") {
        var progressLine = document.querySelector(".progress-bar--step".concat(step - 1, " > span:nth-child(2)"));
        var progressIndicator = document.querySelector(".progress-bar--step".concat(step, " > span:nth-child(1)"));
        var progressLabel = document.querySelector(".progress-bar--step".concat(step, " > span:nth-child(3)"));
        progressLine.style.backgroundColor = "#f37335";
        progressIndicator.style.backgroundColor = "#f37335";
        progressLabel.style.color = "#f37335";
    }
};
/* Initialize event listeners */
var init = (function () {
    nextStep1 === null || nextStep1 === void 0 ? void 0 : nextStep1.addEventListener("click", handleNext);
    nextStep2 === null || nextStep2 === void 0 ? void 0 : nextStep2.addEventListener("click", handleNext);
    prevStep2 === null || prevStep2 === void 0 ? void 0 : prevStep2.addEventListener("click", handlePrev);
    prevStep3 === null || prevStep3 === void 0 ? void 0 : prevStep3.addEventListener("click", handlePrev);
})();
