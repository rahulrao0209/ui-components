/* Selecting all the required DOM elements */
const carouselContainer = document.querySelector(
  ".carousel__container"
) as HTMLElement | null;
const carouselSlider = document.querySelector(
  ".carousel__slider"
) as HTMLElement | null;

/* Declaraing variables to keep track of the user interaction with the slider */
let pressed = false;
let startingPositionX: number;
let positionX: number;

/* 
    This is the value(px) by which we can allow additonal dragging at the boundaries on both ends
    Find the checkBoundary function below to see its usage.
  */
const allowedExtraDrag = 100;

const getXOffset = function (event: MouseEvent | TouchEvent) {
  if (event instanceof MouseEvent) return event.offsetX;
  if (event instanceof TouchEvent) return event.touches[0].clientX;
  return 0;
};

const handleMouseDown = (event: MouseEvent | TouchEvent) => {
  pressed = true;
  let xOffset: number = getXOffset(event);

  if (carouselSlider) {
    startingPositionX = xOffset - carouselSlider.offsetLeft;
  }

  if (carouselContainer) carouselContainer.style.cursor = "grabbing";
};

const handleMouseUp = function () {
  pressed = false;
  if (carouselContainer) carouselContainer.style.cursor = "grab";
};

const handleMouseMove = function (event: MouseEvent | TouchEvent) {
  if (!pressed) return;
  event.preventDefault();
  positionX = getXOffset(event);

  if (carouselSlider) {
    carouselSlider.style.left = `${positionX - startingPositionX}px`;
  }

  checkBoundary();
};

const checkBoundary = function () {
  let outer = carouselContainer?.getBoundingClientRect();
  let inner = carouselSlider?.getBoundingClientRect();

  if (carouselSlider) {
    if (parseInt(carouselSlider.style.left) - allowedExtraDrag > 0)
      carouselSlider.style.left = "0px";
  }

  if (inner && outer && carouselSlider) {
    if (inner.right + allowedExtraDrag < outer.right) {
      carouselSlider.style.left = `-${inner.width - outer.width}px`;
    }
  }
};

const init = (function () {
  /* Add event listeners to the required elements */
  carouselContainer?.addEventListener("mousedown", handleMouseDown);

  carouselContainer?.addEventListener("mouseup", handleMouseUp);

  carouselContainer?.addEventListener("mousemove", handleMouseMove);

  /* Touch Events */
  carouselContainer?.addEventListener("touchstart", handleMouseDown);

  carouselContainer?.addEventListener("touchend", handleMouseUp);

  carouselContainer?.addEventListener("touchmove", handleMouseMove);
})();
