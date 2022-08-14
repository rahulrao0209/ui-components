type DateDetails = {
  day: string;
  month: string;
  dayNumeric: number;
  monthNumeric: number;
  year: number;
};

type Month = "previous" | "current" | "next";

/* Get all the necessary DOM nodes and initialize any global variables if required */
const calendarMonthDays = document.querySelector(".calendar__monthdays");
const calendarDays = document.querySelector(".calendar__days");
const calendarMonths = document.querySelector(".calendar__months");
const calendarYears = document.querySelector(".calendar__years");
const calendarDecade = document.querySelector(".years--decade");
const monthButton = document.querySelector(".controls--month");
const yearButton = document.querySelector(".controls--year");
const nextDecadeButton = document.querySelector(
  ".years--controls > span:nth-child(1)"
);
const previousDecadeButton = document.querySelector(
  ".years--controls > span:nth-child(2)"
);

const switchDecade = function (event: MouseEvent) {
  const currentYearDisplayed = +yearButton.textContent;

  if ((event.target as HTMLSpanElement).textContent.includes("forward")) {
    yearButton.textContent = `${currentYearDisplayed + 10}`;
  } else {
    yearButton.textContent = `${currentYearDisplayed - 10}`;
  }
  addYears(+yearButton.textContent);
};

const getMonthDays = function (
  monthType: Month,
  noOfMonthDays: number,
  monthDays: DateDetails[],
  year: number,
  month: number
) {
  for (let i = 0; i < noOfMonthDays; i++) {
    /* Use proper expression for calculating the day value according to the monthType aka previous | current | next */
    let dayValueExp: number;

    if (monthType === "previous") {
      dayValueExp = 0 - i;
    } else {
      dayValueExp = i + 1;
    }

    const date = new Date(year, month, dayValueExp);
    const dayNumeric = date.getDate();
    const monthNumeric = date.getMonth();
    const dateYear = date.getFullYear();
    const [monthString, dayString] = date
      .toLocaleDateString("en-in", { weekday: "short", month: "short" })
      .split(" ");

    monthDays.push({
      day: dayString,
      month: monthString,
      dayNumeric: dayNumeric,
      monthNumeric: monthNumeric,
      year: dateYear,
    });
  }
};

const isToday = function (currentDay: DateDetails) {
  const today = new Date();
  const todayDayNumeric = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  return (
    todayDayNumeric === currentDay.dayNumeric &&
    todayMonth === currentDay.monthNumeric &&
    todayYear === currentDay.year
  );
};

const addMonthDays = function (monthType: Month, monthDays: DateDetails[]) {
  monthDays.forEach((day: DateDetails) => {
    const dateDiv = document.createElement("div");
    dateDiv.innerText = day.dayNumeric.toString();
    calendarDays?.appendChild(dateDiv);

    if (monthType !== "current") {
      dateDiv.style.color = "#8a8a8a";
    }

    /* Highlight today */
    if (monthType === "current" && isToday(day)) {
      dateDiv.style.backgroundColor = "#5b86e5";
      dateDiv.style.color = "#fff";
    }
  });
};

const addYears = function (currentDecadeYear: number) {
  const decadeStartYear = currentDecadeYear - (currentDecadeYear % 10);

  /* Clear all the years which may be currently displayed */
  calendarDecade.innerHTML = "";

  /* Use a for loop to add all the years in the concerned decade */
  for (let i = 0; i < 10; i++) {
    const yearDiv = document.createElement("div");
    yearDiv.innerText = `${decadeStartYear + i}`;
    calendarDecade.appendChild(yearDiv);

    /* Highlight the current year */
    if (new Date().getFullYear() === +yearDiv.innerText) {
      yearDiv.style.color = "#5b86e5";
    }
  }
};

const getMonthData = (month: number, year: number) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const firstWeekdayOfMonth = new Date(year, month, 1).toLocaleDateString(
    "en-us",
    { weekday: "short" }
  );

  const firstWeekdayOfNextMonth = new Date(
    year,
    month + 1,
    1
  ).toLocaleDateString("en-us", { weekday: "short" });

  const noOfPreviousMonthDays = weekdays.indexOf(firstWeekdayOfMonth);

  /* 0 as input for the day fetches the last day of the previous month */
  const noOfCurrentMonthDays = new Date(year, month + 1, 0).getDate();

  const noOfNextMonthDays = 7 - weekdays.indexOf(firstWeekdayOfNextMonth);

  const currentMonthDays: DateDetails[] = [];
  const previousMonthDays: DateDetails[] = [];
  const nextMonthDays: DateDetails[] = [];

  /* Collect all trailing days from the previous month */
  getMonthDays(
    "previous",
    noOfPreviousMonthDays,
    previousMonthDays,
    year,
    month
  );

  /* Collect all current month days */
  getMonthDays("current", noOfCurrentMonthDays, currentMonthDays, year, month);

  /* Collect all next month days */
  getMonthDays("next", noOfNextMonthDays, nextMonthDays, year, month + 1);

  return { previousMonthDays, currentMonthDays, nextMonthDays };
};

const loadMonth = function (
  month = new Date().getMonth(),
  year = new Date().getFullYear()
) {
  const { previousMonthDays, currentMonthDays, nextMonthDays } = getMonthData(
    month,
    year
  );

  /* Add the previous month days */
  addMonthDays("previous", [...previousMonthDays].reverse());

  /* Add the current month days */
  addMonthDays("current", currentMonthDays);

  /* Add the next month days */
  addMonthDays("next", nextMonthDays);
};

const getYearsData = function (year: number) {
  const yearString = year.toString();
  const currentDecadeYear = yearString.slice(-2);
  const currentCentury = yearString.slice(0, yearString.length - 2);

  return { currentCentury, currentDecadeYear };
};

/* Load the years in the current decade and populate the years grid */
const loadYears = function (year = new Date().getFullYear()) {
  addYears(year);
};

const handleMonthControl = function () {
  console.log("Clicked on month button");
  calendarYears.classList.add("hide");
  calendarMonthDays.classList.add("hide");

  calendarMonths.classList.remove("hide");
};

const handleMonth = function (event: MouseEvent) {
  console.log("Handling months");

  calendarMonths.classList.add("hide");
  calendarMonthDays.classList.remove("hide");

  const monthClicked = (event.target as HTMLDivElement).textContent;
  console.log("Month Index: ", (event.target as HTMLDivElement).dataset.month);

  const monthIndex = (event.target as HTMLDivElement).dataset.month;

  /* Clear previously rendered month */
  calendarDays.innerHTML = "";

  /* Load the new calendar date based on the currently selected month and year */
  const currentSelectedYear = yearButton.textContent;
  loadMonth(+monthIndex, +currentSelectedYear);
  monthButton.textContent = monthClicked;
  (monthButton as HTMLDivElement).dataset.month = `${monthIndex}`;
};

const handleYearControl = function () {
  console.log("Clicked on year button");
  /* Change the display */
  calendarMonthDays.classList.add("hide");
  calendarMonths.classList.add("hide");

  calendarYears.classList.remove("hide");
};

const handleYear = function (event: MouseEvent) {
  console.log("Handling years");

  const yearClicked = (event.target as HTMLDivElement).textContent;

  /* If a year option is not the target then return */
  if (!+yearClicked) return;

  calendarYears.classList.add("hide");
  calendarMonthDays.classList.remove("hide");

  /* Clear previously rendered month */
  calendarDays.innerHTML = "";

  /* Load the new calendar date based on the currently selected month and year */
  const currentSelectedMonth = (monthButton as HTMLDivElement).dataset.month;

  loadMonth(+currentSelectedMonth, +yearClicked);
  yearButton.textContent = yearClicked;

  console.log("current year being shown: ", yearClicked);
  console.log("current month being shown: ", currentSelectedMonth);
};

const populateToday = function () {
  const today = new Date();
  const monthString = today.toLocaleDateString("en-us", { month: "long" });
  const month = today.getMonth();
  const year = today.getFullYear();

  /* Populate the markup with the initial data */
  monthButton.textContent = monthString;
  (monthButton as HTMLDivElement).dataset.month = `${month}`;
  yearButton.textContent = `${year}`;
};

/* Add event listeners and load the month */
const init = (function () {
  /* Add initial data for current month and year */
  populateToday();
  loadMonth();
  loadYears();

  calendarMonthDays?.addEventListener("click", () => {});
  calendarMonths?.addEventListener("click", handleMonth);
  calendarYears?.addEventListener("click", handleYear);
  monthButton?.addEventListener("click", handleMonthControl);
  yearButton?.addEventListener("click", handleYearControl);
  nextDecadeButton?.addEventListener("click", switchDecade);
  previousDecadeButton?.addEventListener("click", switchDecade);
})();
