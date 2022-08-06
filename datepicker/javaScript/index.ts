type DateDetails = {
  day: string;
  month: string;
  dayNumeric: number;
  year: number;
};

const getCurrentMonthData = (month = new Date().getMonth()) => {
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
    const day = date.getDate();
    const dateYear = date.getFullYear();
    const [monthString, dayString] = date
      .toLocaleDateString("en-in", { weekday: "short", month: "short" })
      .split(" ");

    console.log(`Previous ${dayString} ${monthString} ${day} ${dateYear}`);

    previousMonthDays.push({
      day: dayString,
      month: monthString,
      dayNumeric: day,
      year: dateYear,
    });
  }

  /* Collect all current month days */
  for (let i = 0; i < noOfCurrentMonthDays; i++) {
    const date = new Date(year, month, i + 1);
    const day = date.getDate();
    const dateYear = date.getFullYear();
    const [monthString, dayString] = date
      .toLocaleDateString("en-in", { weekday: "short", month: "short" })
      .split(" ");

    console.log(`Current ${dayString} ${monthString} ${day} ${dateYear}`);

    currentMonthDays.push({
      day: dayString,
      month: monthString,
      dayNumeric: day,
      year: dateYear,
    });
  }

  /* Collect all current month days */
  for (let i = 0; i < noOfNextMonthDays; i++) {
    const date = new Date(year, month + 1, i + 1);
    const day = date.getDate();
    const dateYear = date.getFullYear();
    const [monthString, dayString] = date
      .toLocaleDateString("en-in", { weekday: "short", month: "short" })
      .split(" ");

    console.log(`Current ${dayString} ${monthString} ${day} ${dateYear}`);

    nextMonthDays.push({
      day: dayString,
      month: monthString,
      dayNumeric: day,
      year: dateYear,
    });
  }

  return { previousMonthDays, currentMonthDays, nextMonthDays };
};

const loadMonth = function () {
  const { previousMonthDays, currentMonthDays, nextMonthDays } =
    getCurrentMonthData();

  const daysBlock = document.querySelector(".calendar__days");

  /* Add the previous month days */
  previousMonthDays.forEach((day: DateDetails) => {
    const dateDiv = document.createElement("div");
    dateDiv.innerText = day.dayNumeric.toString();
    dateDiv.style.color = "grey";
    daysBlock?.appendChild(dateDiv);
  });

  /* Add the current month days */
  currentMonthDays.forEach((day: DateDetails) => {
    const dateDiv = document.createElement("div");
    dateDiv.innerText = day.dayNumeric.toString();
    daysBlock?.appendChild(dateDiv);
  });

  /* Add the next month days */
  nextMonthDays.forEach((day: DateDetails) => {
    const dateDiv = document.createElement("div");
    dateDiv.innerText = day.dayNumeric.toString();
    dateDiv.style.color = "grey";
    daysBlock?.appendChild(dateDiv);
  });
};

loadMonth();
