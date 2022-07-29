/* Get all the form steps */
const step1 = document.querySelector("#form-step-1");
const step2 = document.querySelector("#form-step-2");
const step3 = document.querySelector("#form-step-3");

/* Get the buttons for each form step */
const nextStep1 = document.querySelector("#next-step-1");

const nextStep2 = document.querySelector("#next-step-2");
const prevStep2 = document.querySelector("#prev-step-2");

const prevStep3 = document.querySelector("#prev-step-3");

const handleNext = function (event: Event) {
  event.preventDefault();
  const stepClicked = parseInt(
    (event.target as HTMLElement).dataset.val as string
  );

  // On step 1
  if (stepClicked === 1) {
    step1?.classList.remove("disappear-rev");
    step2?.classList.remove("appear-rev");

    step1?.classList.add("disappear");
    step1?.classList.add("disappeared"); // Add this class to make the previous form invisible
    step2?.classList.add("appear");
  }

  // On step 2

  console.log("val: ", stepClicked);
};

const handlePrev = function (event: Event) {
  event.preventDefault();
  const stepClicked = parseInt(
    (event.target as HTMLElement).dataset.val as string
  );

  // On step 2
  if (stepClicked === 2) {
    step1?.classList.remove("disappear");
    step2?.classList.remove("appear");

    step2?.classList.add("appear-rev");
    step1?.classList.add("disappear-rev");
  }

  // On step 3
};

/* Initialize event listeners */
const init = (function () {
  nextStep1?.addEventListener("click", handleNext);

  nextStep2?.addEventListener("click", handleNext);
  prevStep2?.addEventListener("click", handlePrev);

  prevStep3?.addEventListener("click", handlePrev);
})();
