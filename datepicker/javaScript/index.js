var getCurrentMonthData = function (month) {
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
    console.log("first weekday of month: ", firstWeekdayOfMonth);
    console.log("first weekday of next month: ", firstWeekdayOfNextMonth);
    console.log("Number of current month days: ", noOfCurrentMonthDays);
    console.log("Number of previous month days: ", noOfPreviousMonthDays);
    console.log("Number of next month days: ", noOfNextMonthDays);
    /* Collect all trailing days from the previous month */
    for (var i = 0; i < noOfPreviousMonthDays; i++) {
        var date_1 = new Date(year, month, 0 - i);
        var day = date_1.getDate();
        var dateYear = date_1.getFullYear();
        var _a = date_1
            .toLocaleDateString("en-in", { weekday: "short", month: "short" })
            .split(" "), monthString = _a[0], dayString = _a[1];
        console.log("Previous ".concat(dayString, " ").concat(monthString, " ").concat(day, " ").concat(dateYear));
        previousMonthDays.push({
            day: dayString,
            month: monthString,
            dayNumeric: day,
            year: dateYear
        });
    }
    /* Collect all month days */
    for (var i = 0; i < noOfCurrentMonthDays; i++) {
        var date_2 = new Date(year, month, i + 1);
        var day = date_2.getDate();
        var dateYear = date_2.getFullYear();
        var _b = date_2
            .toLocaleDateString("en-in", { weekday: "short", month: "short" })
            .split(" "), monthString = _b[0], dayString = _b[1];
        console.log("Current ".concat(dayString, " ").concat(monthString, " ").concat(day, " ").concat(dateYear));
        currentMonthDays.push({
            day: dayString,
            month: monthString,
            dayNumeric: day,
            year: dateYear
        });
    }
    return { previousMonthDays: previousMonthDays, currentMonthDays: currentMonthDays, nextMonthDays: nextMonthDays };
};
var loadMonth = function () {
    var _a = getCurrentMonthData(), previousMonthDays = _a.previousMonthDays, currentMonthDays = _a.currentMonthDays, nextMonthDays = _a.nextMonthDays;
    var daysBlock = document.querySelector(".calendar__days");
    /* Add the previous month days */
    previousMonthDays.forEach(function (day) {
        var dateDiv = document.createElement("div");
        dateDiv.innerText = day.dayNumeric.toString();
        daysBlock === null || daysBlock === void 0 ? void 0 : daysBlock.appendChild(dateDiv);
    });
    /* Add the current month days */
    currentMonthDays.forEach(function (day) {
        var dateDiv = document.createElement("div");
        dateDiv.innerText = day.dayNumeric.toString();
        daysBlock === null || daysBlock === void 0 ? void 0 : daysBlock.appendChild(dateDiv);
    });
    /* Add the next month days */
    nextMonthDays.forEach(function (day) {
        var dateDiv = document.createElement("div");
        dateDiv.innerText = day.dayNumeric.toString();
        daysBlock === null || daysBlock === void 0 ? void 0 : daysBlock.appendChild(dateDiv);
    });
};
loadMonth();
