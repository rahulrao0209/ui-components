import { PickerContextProps, PickerState } from "./interfaces";

// Action types.
export const NEXT_MONTH = "NEXT_MONTH";
export const PREVIOUS_MONTH = "PREVIOUS_MONTH";

export const UPDATE_MONTH_PICKER_ONE = "UPDATE_MONTH_PICKER_ONE";
export const UPDATE_MONTH_PICKER_TWO = "UPDATE_MONTH_PICKER_TWO";
export const UPDATE_YEAR_PICKER_ONE = "UPDATE_YEAR_PICKER_ONE";
export const UPDATE_YEAR_PICKER_TWO = "UPDATE_YEAR_PICKER_TWO";
export const DISPLAY_DAYS_PICKER_ONE = "DISPLAY_DAYS_PICKER_ONE";
export const DISPLAY_DAYS_PICKER_TWO = "DISPLAY_DAYS_PICKER_TWO";
export const DISPLAY_YEARS_PICKER_ONE = "DISPLAY_YEARS_PICKER_ONE";
export const DISPLAY_YEARS_PICKER_TWO = "DISPLAY_YEARS_PICKER_TWO";
export const DISPLAY_MONTHS_PICKER_ONE = "DISPLAY_MONTHS_PICKER_ONE";
export const DISPLAY_MONTHS_PICKER_TWO = "DISPLAY_MONTHS_PICKER_TWO";

// Actions
export const getPreviousMonth = (state: PickerState, pickerNumber: number) => {
  const { pickerOne, pickerTwo } = state;
  const { month: monthOne, year: yearOne } = pickerOne;
  const { month: monthTwo, year: yearTwo } = pickerTwo;

  // Set initial values to have compatible return types.
  let updatedMonthOne = monthOne;
  let updatedMonthTwo = monthTwo;
  let updatedYearOne = yearOne;
  let updatedYearTwo = yearTwo;

  if (pickerNumber === 1) {
    updatedMonthOne = monthOne === 0 ? 11 : monthOne - 1;
    updatedYearOne = monthOne === 0 ? yearOne - 1 : yearOne;
    updatedMonthTwo = monthTwo;
    updatedYearTwo = yearTwo;
  }

  if (pickerNumber === 2) {
    updatedMonthTwo = monthTwo === 0 ? 11 : monthTwo - 1;
    updatedYearTwo = monthTwo === 0 ? yearTwo - 1 : yearTwo;

    // picker2's date should never be less than picker1's date.
    // only update picker1 if the picker2's date becomes less than or equal to picker1's date.
    if (updatedMonthTwo <= monthOne && updatedYearTwo <= yearOne) {
      updatedMonthOne = updatedMonthTwo === 0 ? 11 : updatedMonthTwo - 1;
      updatedYearOne = updatedMonthTwo === 0 ? yearTwo - 1 : yearTwo;
    } else {
      updatedMonthOne = monthOne;
      updatedYearOne = yearOne;
    }
  }

  return {
    ...state,
    pickerOne: {
      ...pickerOne,
      month: updatedMonthOne,
      year: updatedYearOne,
    },
    pickerTwo: {
      ...pickerTwo,
      month: updatedMonthTwo,
      year: updatedYearTwo,
    },
  };
};

export const getNextMonth = (state: PickerState, pickerNumber: number) => {
  const { pickerOne, pickerTwo } = state;
  const { month: monthOne, year: yearOne } = pickerOne;
  const { month: monthTwo, year: yearTwo } = pickerTwo;

  // Set initial values to have compatible return types.
  let updatedMonthOne = monthOne;
  let updatedMonthTwo = monthTwo;
  let updatedYearOne = yearOne;
  let updatedYearTwo = yearTwo;

  if (pickerNumber === 1) {
    updatedMonthOne = monthOne === 11 ? 0 : monthOne + 1;
    updatedYearOne = monthOne === 11 ? yearOne + 1 : yearOne;

    // Only updated picker2 if the dates of picker one become greater than or equal to picker2's dates.
    if (updatedMonthOne >= monthTwo && updatedYearOne >= yearTwo) {
      updatedMonthTwo = updatedMonthOne === 11 ? 0 : updatedMonthOne + 1;
      updatedYearTwo = updatedMonthOne === 11 ? yearTwo + 1 : yearTwo;
    } else {
      updatedMonthTwo = monthTwo;
      updatedYearTwo = yearTwo;
    }
  }

  if (pickerNumber === 2) {
    updatedMonthTwo = monthTwo === 11 ? 0 : monthTwo + 1;
    updatedYearTwo = monthTwo === 11 ? yearTwo + 1 : yearTwo;
    updatedMonthOne = monthOne;
    updatedYearOne = yearOne;
  }

  return {
    ...state,
    pickerOne: {
      ...pickerOne,
      month: updatedMonthOne,
      year: updatedYearOne,
    },
    pickerTwo: {
      ...pickerTwo,
      month: updatedMonthTwo,
      year: updatedYearTwo,
    },
  };
};
