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
  addActiveState();
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
  removeActiveState();
  addActiveState();
};

const addActiveState = function () {
  const activePageIndicator = document.querySelector(
    `.indicator--${currentPage}`
  );

  const activePageNumber = document.querySelector(`.page--${currentPage}`);

  if (activePageIndicator) {
    removeActiveState();
    activePageIndicator.classList.add("active-page-indicator");
  }

  if (activePageNumber) {
    activePageNumber.classList.add("active-page-indicator");
  }
};

const removeActiveState = function () {
  const pageIndicators = document.querySelectorAll(".page-indicator");
  const pageNumbers = document.querySelectorAll(".page-num");

  pageIndicators?.forEach((page) =>
    page.classList.remove("active-page-indicator")
  );

  pageNumbers?.forEach((pageNum) =>
    pageNum.classList.remove("active-page-indicator")
  );
};

const init = (function () {
  /* Set current page on load */
  currentPage = FIRST_PAGE;

  /* Add event listeners to the arrows and the page numbers */
  pageNumbers?.addEventListener("click", gotoPage);
  arrowPrev?.addEventListener("click", handlePagination);
  arrowNext?.addEventListener("click", handlePagination);
  addActiveState();
})();
