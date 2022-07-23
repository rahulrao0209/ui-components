/* Initialize the first and last page for the pagination */
var FIRST_PAGE = 1;
var LAST_PAGE = 10;
var currentPage;
/* Get the necessary DOM elements */
var pageNumbers = document.querySelector(".page-numbers");
var arrowPrev = document.querySelector(".arrow--prev");
var arrowNext = document.querySelector(".arrow--next");
var gotoPage = function (event) {
    var element = event.target;
    if (element) {
        if (!element.classList.contains("page-num"))
            return;
    }
    currentPage = +element.innerText;
    console.log("currentPage: ", currentPage);
};
var handlePagination = function (event) {
    var arrow = event.target.closest("div");
    var isPrev = arrow.classList.contains("arrow--prev");
    var isNext = arrow.classList.contains("arrow--next");
    if (isPrev && currentPage !== 1) {
        currentPage -= 1;
    }
    if (isNext && currentPage !== 10) {
        currentPage += 1;
    }
    console.log("currentPage: ", currentPage);
};
var init = (function () {
    /* Add event listeners to the arrows and the page numbers */
    pageNumbers === null || pageNumbers === void 0 ? void 0 : pageNumbers.addEventListener("click", gotoPage);
    arrowPrev === null || arrowPrev === void 0 ? void 0 : arrowPrev.addEventListener("click", handlePagination);
    arrowNext === null || arrowNext === void 0 ? void 0 : arrowNext.addEventListener("click", handlePagination);
    currentPage = FIRST_PAGE;
})();
