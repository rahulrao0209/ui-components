/* Get all the necessary DOM nodes and initialize any global variables if required */
const calendarMonthDays = document.querySelector(".calendar__monthdays");
const calendarDays = document.querySelector(".calendar__days");
const calendarMonths = document.querySelector(".calendar__months");
const calendarYears = document.querySelector(".calendar__years");
const monthButton = document.querySelector(".controls--month");
const yearButton = document.querySelector(".controls--year");
const getMonthDays = function (monthType, noOfMonthDays, monthDays, year, month) {
    for (let i = 0; i < noOfMonthDays; i++) {
        /* Use proper expression for calculating the day value according to the monthType aka previous | current | next */
        let dayValueExp;
        if (monthType === "previous") {
            dayValueExp = 0 - i;
        }
        else {
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
const isToday = function (currentDay) {
    const today = new Date();
    const todayDayNumeric = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    return (todayDayNumeric === currentDay.dayNumeric &&
        todayMonth === currentDay.monthNumeric &&
        todayYear === currentDay.year);
};
const addMonthDays = function (monthType, monthDays) {
    monthDays.forEach((day) => {
        const dateDiv = document.createElement("div");
        dateDiv.innerText = day.dayNumeric.toString();
        calendarDays === null || calendarDays === void 0 ? void 0 : calendarDays.appendChild(dateDiv);
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
const addYears = function (currentCentury, currentDecadeYear) {
    const decadeYearPrefix = currentDecadeYear[0]; // ex: 22 -> prefix 2;
    /* Clear all the years which may be currently displayed */
    calendarYears.innerHTML = "";
    /* Use a for loop to add all the years in the concerned decade */
    for (let i = 0; i < 10; i++) {
        const yearDiv = document.createElement("div");
        yearDiv.innerText = currentCentury + decadeYearPrefix + i;
        calendarYears.appendChild(yearDiv);
    }
};
const getMonthData = (month, year) => {
    const date = new Date(); // Will always be today's date
    // const year = date.getFullYear();
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const firstWeekdayOfMonth = new Date(year, month, 1).toLocaleDateString("en-us", { weekday: "short" });
    const firstWeekdayOfNextMonth = new Date(year, month + 1, 1).toLocaleDateString("en-us", { weekday: "short" });
    const noOfPreviousMonthDays = weekdays.indexOf(firstWeekdayOfMonth);
    /* 0 as input for the day fetches the last day of the previous month */
    const noOfCurrentMonthDays = new Date(year, month + 1, 0).getDate();
    const noOfNextMonthDays = 7 - weekdays.indexOf(firstWeekdayOfNextMonth);
    const currentMonthDays = [];
    const previousMonthDays = [];
    const nextMonthDays = [];
    /* Collect all trailing days from the previous month */
    getMonthDays("previous", noOfPreviousMonthDays, previousMonthDays, year, month);
    /* Collect all current month days */
    getMonthDays("current", noOfCurrentMonthDays, currentMonthDays, year, month);
    /* Collect all next month days */
    getMonthDays("next", noOfNextMonthDays, nextMonthDays, year, month + 1);
    return { previousMonthDays, currentMonthDays, nextMonthDays };
};
const loadMonth = function (month = new Date().getMonth(), year = new Date().getFullYear()) {
    console.log("Year: ", year);
    console.log("Month: ", month);
    const { previousMonthDays, currentMonthDays, nextMonthDays } = getMonthData(month, year);
    /* Add the previous month days */
    addMonthDays("previous", previousMonthDays);
    /* Add the current month days */
    addMonthDays("current", currentMonthDays);
    /* Add the next month days */
    addMonthDays("next", nextMonthDays);
};
const getYearsData = function (year) {
    const yearString = year.toString();
    const currentDecadeYear = yearString.slice(-2);
    const currentCentury = yearString.slice(0, yearString.length - 2);
    return { currentCentury, currentDecadeYear };
};
/* Load the years in the current decade and populate the years grid */
const loadYears = function (year = new Date().getFullYear()) {
    const { currentCentury, currentDecadeYear } = getYearsData(year);
    addYears(currentCentury, currentDecadeYear);
};
const handleMonthControl = function () {
    console.log("Clicked on month button");
    calendarYears.classList.add("hide");
    calendarMonthDays.classList.add("hide");
    calendarMonths.classList.remove("hide");
};
const handleMonth = function (event) {
    console.log("Handling months");
    calendarMonths.classList.add("hide");
    calendarMonthDays.classList.remove("hide");
    const monthClicked = event.target.textContent;
    console.log("Month Index: ", event.target.dataset.month);
    const monthIndex = event.target.dataset.month;
    /* Clear previously rendered month */
    calendarDays.innerHTML = "";
    /* Load the new selected month */
    loadMonth(+monthIndex);
    monthButton.textContent = monthClicked;
};
const handleYearControl = function () {
    console.log("Clicked on year button");
    /* Change the display */
    calendarMonthDays.classList.add("hide");
    calendarMonths.classList.add("hide");
    calendarYears.classList.remove("hide");
};
const handleYear = function (event) {
    console.log("Handling years");
    calendarYears.classList.add("hide");
    calendarMonthDays.classList.remove("hide");
    const yearClicked = event.target.textContent;
    // console.log("Clicked on year: ", yearClicked);
    /* Clear previously rendered month */
    calendarDays.innerHTML = "";
    /* Load the new calendar date based on the currently selected month and year */
    const currentSelectedMonth = 0;
    loadMonth(+currentSelectedMonth, +yearClicked);
    yearButton.textContent = yearClicked;
};
/* Add event listeners and load the month */
const init = (function () {
    loadMonth();
    loadYears();
    calendarMonthDays === null || calendarMonthDays === void 0 ? void 0 : calendarMonthDays.addEventListener("click", () => { });
    calendarMonths === null || calendarMonths === void 0 ? void 0 : calendarMonths.addEventListener("click", handleMonth);
    calendarYears === null || calendarYears === void 0 ? void 0 : calendarYears.addEventListener("click", handleYear);
    monthButton === null || monthButton === void 0 ? void 0 : monthButton.addEventListener("click", handleMonthControl);
    yearButton === null || yearButton === void 0 ? void 0 : yearButton.addEventListener("click", handleYearControl);
})();
