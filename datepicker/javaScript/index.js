var getMonthDays = function (monthType, noOfMonthDays, monthDays, year, month) {
    for (var i = 0; i < noOfMonthDays; i++) {
        /* Use proper expression for calculating the day value according to the monthType aka previous | current | next */
        var dayValueExp = void 0;
        if (monthType === "previous") {
            dayValueExp = 0 - i;
        }
        else {
            dayValueExp = i + 1;
        }
        var date = new Date(year, month, dayValueExp);
        var dayNumeric = date.getDate();
        var monthNumeric = date.getMonth();
        var dateYear = date.getFullYear();
        var _a = date
            .toLocaleDateString("en-in", { weekday: "short", month: "short" })
            .split(" "), monthString = _a[0], dayString = _a[1];
        console.log("Previous ".concat(dayString, " ").concat(monthString, " ").concat(dayNumeric, " ").concat(dateYear));
        monthDays.push({
            day: dayString,
            month: monthString,
            dayNumeric: dayNumeric,
            monthNumeric: monthNumeric,
            year: dateYear
        });
    }
};
/* Get the CSS color values from the variables */
// const primaryPurple = getComputedStyle(
//   document.documentElement
// ).getPropertyValue("--primary-purple");
// const primaryGreen = getComputedStyle(
//   document.documentElement
// ).getPropertyValue("--primary-green");
// const primaryGrey = getComputedStyle(document.documentElement).getPropertyValue(
//   "--primary-grey"
// );
// const primaryGreyLight = getComputedStyle(
//   document.documentElement
// ).getPropertyValue("--primary-grey-light");
// const primaryGreyFaded = getComputedStyle(
//   document.documentElement
// ).getPropertyValue("--primary-grey-faded");
var isToday = function (currentDay) {
    var today = new Date();
    var todayDayNumeric = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();
    return (todayDayNumeric === currentDay.dayNumeric &&
        todayMonth === currentDay.dayNumeric &&
        todayYear === currentDay.year);
};
var getMonthData = function (month) {
    if (month === void 0) { month = new Date().getMonth(); }
    var date = new Date(); // Will always be today's date
    var year = date.getFullYear();
    var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var firstWeekdayOfMonth = new Date(year, month, 1).toLocaleDateString("en-us", { weekday: "short" });
    var firstWeekdayOfNextMonth = new Date(year, month + 1, 1).toLocaleDateString("en-us", { weekday: "short" });
    var noOfPreviousMonthDays = weekdays.indexOf(firstWeekdayOfMonth);
    /* 0 as input for the day fetches the last day of the previous month */
    var noOfCurrentMonthDays = new Date(year, month + 1, 0).getDate();
    var noOfNextMonthDays = 7 - weekdays.indexOf(firstWeekdayOfNextMonth);
    var currentMonthDays = [];
    var previousMonthDays = [];
    var nextMonthDays = [];
    /* Collect all trailing days from the previous month */
    getMonthDays("previous", noOfPreviousMonthDays, previousMonthDays, year, month);
    /* Collect all current month days */
    getMonthDays("current", noOfCurrentMonthDays, currentMonthDays, year, month);
    /* Collect all next month days */
    getMonthDays("next", noOfNextMonthDays, nextMonthDays, year, month + 1);
    return { previousMonthDays: previousMonthDays, currentMonthDays: currentMonthDays, nextMonthDays: nextMonthDays };
};
var loadMonth = function () {
    var _a = getMonthData(), previousMonthDays = _a.previousMonthDays, currentMonthDays = _a.currentMonthDays, nextMonthDays = _a.nextMonthDays;
    var daysBlock = document.querySelector(".calendar__days");
    /* Add the previous month days */
    previousMonthDays.forEach(function (day) {
        var dateDiv = document.createElement("div");
        dateDiv.innerText = day.dayNumeric.toString();
        dateDiv.style.color = "#8a8a8a";
        daysBlock === null || daysBlock === void 0 ? void 0 : daysBlock.appendChild(dateDiv);
    });
    /* Add the current month days */
    currentMonthDays.forEach(function (day) {
        var dateDiv = document.createElement("div");
        dateDiv.innerText = day.dayNumeric.toString();
        daysBlock === null || daysBlock === void 0 ? void 0 : daysBlock.appendChild(dateDiv);
        /* Highlight today */
        if (isToday(day)) {
            dateDiv.style.backgroundColor = "#5b86e5";
            dateDiv.style.color = "#fff";
        }
    });
    /* Add the next month days */
    nextMonthDays.forEach(function (day) {
        var dateDiv = document.createElement("div");
        dateDiv.innerText = day.dayNumeric.toString();
        dateDiv.style.color = "#8a8a8a";
        daysBlock === null || daysBlock === void 0 ? void 0 : daysBlock.appendChild(dateDiv);
    });
};
loadMonth();
