/**
 * Functions for managing the date-range-picker.
 */
import { DateDetails, MonthOrder } from "../types";

export const getYears = (year: number) => {
  // console.log("Year: ", year);

  const previousYearsInDecade: number[] = [];
  const remainingYearsInDecade: number[] = [];

  // const firstTwoDigits = Math.round(year / 100);
  // const lastTwoDigits = year % 100;
  const lastDigit = year % 10;

  // Get previous years in a given decade.
  const startDecadeYear = year - lastDigit;
  for (let i = 0; i < lastDigit; i++) {
    previousYearsInDecade.push(startDecadeYear + i);
  }

  // Get remaining in a given decade.
  const firstYearOfDecade = previousYearsInDecade[0];
  const lastYearOfDecade = previousYearsInDecade[0] + 9;
  const offsetForRemainingYears =
    firstYearOfDecade + previousYearsInDecade.length;

  for (let i = offsetForRemainingYears; i <= lastYearOfDecade; i++) {
    remainingYearsInDecade.push(i);
  }

  const decade = [...previousYearsInDecade, ...remainingYearsInDecade];

  /**
   * Add 2 more years to display from the next decade as the
   * grid must display 12 years at once.
   */
  const allYearsInGrid = [...decade];
  for (let i = 1; i < 3; i++) allYearsInGrid.push(lastYearOfDecade + i);

  return {
    decade,
    allYearsInGrid,
  };
};

export const getMonthDays = (
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  noOfDays: number,
  monthOrder: MonthOrder
) => {
  const monthDays: DateDetails[] = [];
  let dayValue: number;

  for (let i = 0; i < noOfDays; i++) {
    if (monthOrder === "previous") {
      dayValue = 0 - i;
    } else {
      dayValue = i + 1;
    }

    const date = new Date(year, month, dayValue);
    const day = date.getDate();
    const [monthName, dayName] = date
      .toLocaleDateString("en-in", { weekday: "short", month: "short" })
      .split(" ");

    monthDays.push({
      dayName,
      monthName,
      day,
      month,
      year,
      monthOrder,
    });
  }

  return monthDays;
};

export const getMonthData = (
  month = new Date().getMonth(),
  year = new Date().getFullYear()
) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  /** Get the first day of current and next month */
  const firstWeekdayOfCurrentMonth = new Date(
    year,
    month,
    1
  ).toLocaleDateString("en-us", { weekday: "short" });
  const firstWeekdayOfNextMonth = new Date(
    year,
    month + 1,
    1
  ).toLocaleDateString("en-us", { weekday: "short" });

  /** Get the number of days of current, previous and next months */
  const noOfPreviousMonthDays = weekdays.indexOf(firstWeekdayOfCurrentMonth);

  /* 0 as input for the day fetches the last day of the previous month */
  const noOfCurrentMonthDays = new Date(year, month + 1, 0).getDate();

  const noOfNextMonthDays = 7 - weekdays.indexOf(firstWeekdayOfNextMonth);

  const previousMonthDays = getMonthDays(
    month - 1,
    year,
    noOfPreviousMonthDays,
    "previous"
  );
  const currentMonthDays = getMonthDays(
    month,
    year,
    noOfCurrentMonthDays,
    "current"
  );
  const nextMonthDays = getMonthDays(
    month + 1,
    year,
    noOfNextMonthDays,
    "next"
  );

  return {
    previousMonthDays,
    currentMonthDays,
    nextMonthDays,
  };
};

export const isToday = (currentDate: DateDetails) => {
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  return (
    todayDay === currentDate.day &&
    todayMonth === currentDate.month &&
    todayYear === currentDate.year
  );
};
