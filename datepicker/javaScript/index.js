/* Get all the necessary DOM nodes and initialize any global variables if required */
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
const addMonthDays = function (monthType, monthDays) {
    const daysBlock = document.querySelector(".calendar__days");
    monthDays.forEach((day) => {
        const dateDiv = document.createElement("div");
        dateDiv.innerText = day.dayNumeric.toString();
        daysBlock === null || daysBlock === void 0 ? void 0 : daysBlock.appendChild(dateDiv);
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
const isToday = function (currentDay) {
    const today = new Date();
    const todayDayNumeric = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    return (todayDayNumeric === currentDay.dayNumeric &&
        todayMonth === currentDay.dayNumeric &&
        todayYear === currentDay.year);
};
const getMonthData = (month = new Date().getMonth()) => {
    const date = new Date(); // Will always be today's date
    const year = date.getFullYear();
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
const loadMonth = function () {
    const { previousMonthDays, currentMonthDays, nextMonthDays } = getMonthData();
    /* Add the previous month days */
    addMonthDays("previous", previousMonthDays);
    /* Add the current month days */
    addMonthDays("current", currentMonthDays);
    /* Add the next month days */
    addMonthDays("next", nextMonthDays);
};
/* Add event listeners and load the month */
const init = (function () {
    loadMonth();
    calendarDays === null || calendarDays === void 0 ? void 0 : calendarDays.addEventListener("click", () => { });
    calendarMonths === null || calendarMonths === void 0 ? void 0 : calendarMonths.addEventListener("click", () => { });
    calendarYears === null || calendarYears === void 0 ? void 0 : calendarYears.addEventListener("click", () => { });
    monthButton === null || monthButton === void 0 ? void 0 : monthButton.addEventListener("click", () => { });
    yearButton === null || yearButton === void 0 ? void 0 : yearButton.addEventListener("click", () => { });
})();
