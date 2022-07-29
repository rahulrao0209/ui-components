/* Get all the form steps */
const step1 = document.querySelector("#form-step-1");
const step2 = document.querySelector("#form-step-2");
const step3 = document.querySelector("#form-step-3");

/* Get the buttons for each form step */
const nextStep1 = document.querySelector("#next-step-1");

const nextStep2 = document.querySelector("#next-step-2");
const prevStep2 = document.querySelector("#prev-step-2");

const prevStep3 = document.querySelector("#prev-step-3");

const animationClasses = ["scale-down", "scale-up", "slide-in", "slide-out"];

const removeAnimationClasses = function (step: Element | null) {
  step?.classList.forEach((stepClass: string) => {
    if (animationClasses.includes(stepClass)) step.classList.remove(stepClass);
  });
};

const handleNext = function (event: Event) {
  event.preventDefault();
  const stepClicked = parseInt(
    (event.target as HTMLElement).dataset.val as string
  );

  // Step 1 next button clicked
  if (stepClicked === 1) {
    removeAnimationClasses(step1);
    removeAnimationClasses(step2);
    step1?.classList.add("scale-down");
    step1?.classList.add("disappeared"); // Add this class to make the previous form invisible
    step2?.classList.add("slide-in");
  }

  // Step 2 next button clicked
  if (stepClicked === 2) {
    removeAnimationClasses(step2);
    removeAnimationClasses(step3);
    step2?.classList.add("scale-down");
    step2?.classList.add("disappeared"); // Add this class to make the previous form invisible
    step3?.classList.add("slide-in");
  }

  console.log("val: ", stepClicked);
};

const handlePrev = function (event: Event) {
  event.preventDefault();
  const stepClicked = parseInt(
    (event.target as HTMLElement).dataset.val as string
  );

  // Step 2 previous button clicked
  if (stepClicked === 2) {
    removeAnimationClasses(step1);
    removeAnimationClasses(step2);
    step2?.classList.add("slide-out");
    step1?.classList.add("scale-up");
  }

  // Step 3 previous button clicked
  if (stepClicked === 3) {
    removeAnimationClasses(step2);
    removeAnimationClasses(step3);
    step2?.classList.add("scale-up");
    step3?.classList.add("slide-out");
  }
};

/* Initialize event listeners */
const init = (function () {
  nextStep1?.addEventListener("click", handleNext);

  nextStep2?.addEventListener("click", handleNext);
  prevStep2?.addEventListener("click", handlePrev);

  prevStep3?.addEventListener("click", handlePrev);
})();
