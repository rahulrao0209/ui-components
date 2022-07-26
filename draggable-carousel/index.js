/* Selecting all the required DOM elements */
var carouselContainer = document.querySelector(".carousel__container");
var carouselSlider = document.querySelector(".carousel__slider");
/* Declaraing variables to keep track of the user interaction with the slider */
var pressed = false;
var startingPositionX;
var positionX;
/*
  This is the value(px) by which we can allow additonal dragging at the boundaries on both ends
  Find the checkBoundary function below to see its usage.
*/
var allowedExtraDrag = 100;
var getXOffset = function (event) {
    if (event instanceof MouseEvent)
        return event.offsetX;
    if (event instanceof TouchEvent)
        return event.touches[0].clientX;
    return 0;
};
var handleMouseDown = function (event) {
    pressed = true;
    var xOffset = getXOffset(event);
    if (carouselSlider) {
        startingPositionX = xOffset - carouselSlider.offsetLeft;
    }
    if (carouselContainer)
        carouselContainer.style.cursor = "grabbing";
};
var handleMouseUp = function () {
    pressed = false;
    if (carouselContainer)
        carouselContainer.style.cursor = "grab";
};
var handleMouseMove = function (event) {
    if (!pressed)
        return;
    event.preventDefault();
    positionX = getXOffset(event);
    if (carouselSlider) {
        carouselSlider.style.left = "".concat(positionX - startingPositionX, "px");
    }
    checkBoundary();
};
var checkBoundary = function () {
    var outer = carouselContainer === null || carouselContainer === void 0 ? void 0 : carouselContainer.getBoundingClientRect();
    var inner = carouselSlider === null || carouselSlider === void 0 ? void 0 : carouselSlider.getBoundingClientRect();
    if (carouselSlider) {
        if (parseInt(carouselSlider.style.left) - allowedExtraDrag > 0)
            carouselSlider.style.left = "0px";
    }
    if (inner && outer && carouselSlider) {
        if (inner.right + allowedExtraDrag < outer.right) {
            carouselSlider.style.left = "-".concat(inner.width - outer.width, "px");
        }
    }
};
var init = (function () {
    /* Add event listeners to the required elements */
    carouselContainer === null || carouselContainer === void 0 ? void 0 : carouselContainer.addEventListener("mousedown", handleMouseDown);
    carouselContainer === null || carouselContainer === void 0 ? void 0 : carouselContainer.addEventListener("mouseup", handleMouseUp);
    carouselContainer === null || carouselContainer === void 0 ? void 0 : carouselContainer.addEventListener("mousemove", handleMouseMove);
    /* Touch Events */
    carouselContainer === null || carouselContainer === void 0 ? void 0 : carouselContainer.addEventListener("touchstart", handleMouseDown);
    carouselContainer === null || carouselContainer === void 0 ? void 0 : carouselContainer.addEventListener("touchend", handleMouseUp);
    carouselContainer === null || carouselContainer === void 0 ? void 0 : carouselContainer.addEventListener("touchmove", handleMouseMove);
})();
