/* Get all the form steps */
const step1 = document.querySelector("#form-step-1");
const step2 = document.querySelector("#form-step-2");
const step3 = document.querySelector("#form-step-3");

/* Get the buttons for each form step */
const nextStep1 = document.querySelector("#next-step-1");

const nextStep2 = document.querySelector("#next-step-2");
const prevStep2 = document.querySelector("#prev-step-2");

const prevStep3 = document.querySelector("#prev-step-3");

const submitButton = document.querySelector("#submit");

const animationClasses = [
  "scale-down",
  "scale-up",
  "slide-in",
  "slide-out",
  "add-grow",
  "add-shrink",
];

/* Get the CSS color values from the variables */
const primaryOrange = getComputedStyle(
  document.documentElement
).getPropertyValue("--primary-orange");

const primaryGreen = getComputedStyle(
  document.documentElement
).getPropertyValue("--primary-green");

const primaryGrey = getComputedStyle(document.documentElement).getPropertyValue(
  "--primary-grey"
);

const darkGrey = getComputedStyle(document.documentElement).getPropertyValue(
  "--dark-grey"
);

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

  updateProgress(stepClicked, "next");
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

  updateProgress(stepClicked, "prev");
};

/* Handle the progress bar indicator as we move through the  steps */
const updateProgress = function (step: number, action: string) {
  if (action === "next") {
    const progressIndicator = document.querySelector(
      `.progress-bar--step${step + 1} > span:nth-child(1)`
    );

    const progressLine = document.querySelector(
      `.progress-bar--step${step} > span:nth-child(2)`
    );

    const progressLabel = document.querySelector(
      `.progress-bar--step${step + 1} > span:nth-child(3)`
    );

    /* Remove any animation classes */
    removeAnimationClasses(progressLine);

    progressLine?.classList.add("add-grow");
    (progressLine as HTMLElement).style.backgroundColor = primaryGreen;
    (progressIndicator as HTMLElement).style.backgroundColor = primaryGreen;
    (progressLabel as HTMLElement).style.color = primaryGreen;
  }

  if (action === "prev") {
    const progressIndicator = document.querySelector(
      `.progress-bar--step${step} > span:nth-child(1)`
    );

    const progressLine = document.querySelector(
      `.progress-bar--step${step - 1} > span:nth-child(2)`
    );

    const progressLabel = document.querySelector(
      `.progress-bar--step${step} > span:nth-child(3)`
    );

    /* Remove any animation classes */
    removeAnimationClasses(progressLine);

    progressLine?.classList.add("add-shrink");
    (progressIndicator as HTMLElement).style.backgroundColor = primaryGrey;
    (progressLabel as HTMLElement).style.color = darkGrey;
  }
};

/* Initialize event listeners */
const init = (function () {
  nextStep1?.addEventListener("click", handleNext);

  nextStep2?.addEventListener("click", handleNext);
  prevStep2?.addEventListener("click", handlePrev);

  prevStep3?.addEventListener("click", handlePrev);

  submitButton?.addEventListener("click", () => window.location.reload());
})();
