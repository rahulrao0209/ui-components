/* Initialize the first and last page for the pagination */
const FIRST_PAGE: number = 1;
const LAST_PAGE: number = 10;
let currentPage: number;

/* Get the necessary DOM elements */
const pageNumbers = document.querySelector(".page-numbers");
const arrowPrev = document.querySelector(".arrow--prev");
const arrowNext = document.querySelector(".arrow--next");

const gotoPage = function (event: any) {
  const element = event.target;

  if (element) {
    if (!element.classList.contains("page-num")) return;
  }

  currentPage = +element.innerText;

  console.log("currentPage: ", currentPage);
};

const handlePagination = function (event: any) {
  const arrow = event.target.closest("div");

  const isPrev = arrow.classList.contains("arrow--prev");
  const isNext = arrow.classList.contains("arrow--next");

  if (isPrev && currentPage !== 1) {
    currentPage -= 1;
  }

  if (isNext && currentPage !== 10) {
    currentPage += 1;
  }

  console.log("currentPage: ", currentPage);
};

const init = (function () {
  /* Add event listeners to the arrows and the page numbers */
  pageNumbers?.addEventListener("click", gotoPage);
  arrowPrev?.addEventListener("click", handlePagination);
  arrowNext?.addEventListener("click", handlePagination);

  currentPage = FIRST_PAGE;
})();
