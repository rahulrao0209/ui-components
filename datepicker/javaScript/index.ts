type DateDetails = {
  day: string;
  month: string;
  dayNumeric: number;
  monthNumeric: number;
  year: number;
};

type Month = "previous" | "current" | "next";

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

  console.log("first weekday of month: ", firstWeekdayOfMonth);
  console.log("first weekday of next month: ", firstWeekdayOfNextMonth);
  console.log("Number of current month days: ", noOfCurrentMonthDays);
  console.log("Number of previous month days: ", noOfPreviousMonthDays);
  console.log("Number of next month days: ", noOfNextMonthDays);

  /* Collect all trailing days from the previous month */
  for (let i = 0; i < noOfPreviousMonthDays; i++) {
    const date = new Date(year, month, 0 - i);
    const dayNumeric = date.getDate();
    const monthNumeric = date.getMonth();
    const dateYear = date.getFullYear();
    const [monthString, dayString] = date
      .toLocaleDateString("en-in", { weekday: "short", month: "short" })
      .split(" ");

    console.log(
      `Previous ${dayString} ${monthString} ${dayNumeric} ${dateYear}`
    );

    previousMonthDays.push({
      day: dayString,
      month: monthString,
      dayNumeric: dayNumeric,
      monthNumeric: monthNumeric,
      year: dateYear,
    });
  }

  /* Collect all current month days */
  for (let i = 0; i < noOfCurrentMonthDays; i++) {
    const date = new Date(year, month, i + 1);
    const dayNumeric = date.getDate();
    const monthNumeric = date.getMonth();
    const dateYear = date.getFullYear();
    const [monthString, dayString] = date
      .toLocaleDateString("en-in", { weekday: "short", month: "short" })
      .split(" ");

    console.log(
      `Current ${dayString} ${monthString} ${dayNumeric} ${dateYear}`
    );

    currentMonthDays.push({
      day: dayString,
      month: monthString,
      dayNumeric: dayNumeric,
      monthNumeric: monthNumeric,
      year: dateYear,
    });
  }

  /* Collect all current month days */
  for (let i = 0; i < noOfNextMonthDays; i++) {
    const date = new Date(year, month + 1, i + 1);
    const dayNumeric = date.getDate();
    const monthNumeric = date.getMonth();
    const dateYear = date.getFullYear();
    const [monthString, dayString] = date
      .toLocaleDateString("en-in", { weekday: "short", month: "short" })
      .split(" ");

    console.log(
      `Current ${dayString} ${monthString} ${dayNumeric} ${dateYear}`
    );

    nextMonthDays.push({
      day: dayString,
      month: monthString,
      dayNumeric: dayNumeric,
      monthNumeric: monthNumeric,
      year: dateYear,
    });
  }

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
