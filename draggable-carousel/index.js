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
var handleMouseDown = function (event) {
    pressed = true;
    if (carouselSlider) {
        startingPositionX = event.offsetX - carouselSlider.offsetLeft;
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
    positionX = event.offsetX;
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
})();
