type DateDetails = {
  day: string;
  month: string;
  dayNumeric: number;
  monthNumeric: number;
  year: number;
};

type Month = "previous" | "current" | "next";

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

    console.log(
      `Previous ${dayString} ${monthString} ${dayNumeric} ${dateYear}`
    );

    monthDays.push({
      day: dayString,
      month: monthString,
      dayNumeric: dayNumeric,
      monthNumeric: monthNumeric,
      year: dateYear,
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

const isToday = function (currentDay: DateDetails) {
  const today = new Date();
  const todayDayNumeric = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  return (
    todayDayNumeric === currentDay.dayNumeric &&
    todayMonth === currentDay.dayNumeric &&
    todayYear === currentDay.year
  );
};

const getMonthData = (month = new Date().getMonth()) => {
  const date = new Date(); // Will always be today's date
  const year = date.getFullYear();

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

const loadMonth = function () {
  const { previousMonthDays, currentMonthDays, nextMonthDays } = getMonthData();

  const daysBlock = document.querySelector(".calendar__days");

  /* Add the previous month days */
  previousMonthDays.forEach((day: DateDetails) => {
    const dateDiv = document.createElement("div");
    dateDiv.innerText = day.dayNumeric.toString();
    dateDiv.style.color = "#8a8a8a";
    daysBlock?.appendChild(dateDiv);
  });

  /* Add the current month days */
  currentMonthDays.forEach((day: DateDetails) => {
    const dateDiv = document.createElement("div");
    dateDiv.innerText = day.dayNumeric.toString();
    daysBlock?.appendChild(dateDiv);

    /* Highlight today */
    if (isToday(day)) {
      dateDiv.style.backgroundColor = "#5b86e5";
      dateDiv.style.color = "#fff";
    }
  });

  /* Add the next month days */
  nextMonthDays.forEach((day: DateDetails) => {
    const dateDiv = document.createElement("div");
    dateDiv.innerText = day.dayNumeric.toString();
    dateDiv.style.color = "#8a8a8a";
    daysBlock?.appendChild(dateDiv);
  });
};

loadMonth();
