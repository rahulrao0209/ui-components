import { PickerState } from "./interfaces";

// Action types.
export const UPDATE_MONTH = "UPDATE_MONTH";
export const UPDATE_YEAR = "UPDATE_YEAR";
export const UPDATE_DAY = "UPDATE_DAY";

export const NEXT_MONTH = "NEXT_MONTH";
export const PREVIOUS_MONTH = "PREVIOUS_MONTH";

export const NEXT_DECADE = "NEXT_DECADE";
export const PREVIOUS_DECADE = "PREVIOUS_DECADE";

export const DISPLAY_DAYS = "DISPLAY_DAYS";
export const DISPLAY_YEARS = "DISPLAY_YEARS";
export const DISPLAY_MONTHS = "DISPLAY_MONTHS";

export const SYNC_PICKERS = "SYNC_PICKERS";
export const RESET_PICKERS = "RESET_PICKERS";
export const SET_PREDEFINED_RANGE = "SET_PREDEFINED_RANGE";

// Actions
export const getPreviousMonth = (
  state: PickerState,
  pickerNumber: number
): PickerState => {
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

export const getNextMonth = (
  state: PickerState,
  pickerNumber: number
): PickerState => {
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

/** Decides which picker controller to display */
export const displayYearController = (
  state: PickerState,
  pickerNumber: number
): PickerState => {
  const { pickerOne, pickerTwo } = state;

  if (pickerNumber === 1) {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
        displayYears: true,
        displayDays: false,
        displayMonths: false,
      },
      pickerTwo: {
        ...pickerTwo,
      },
    };
  } else {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
      },
      pickerTwo: {
        ...pickerTwo,
        displayYears: true,
        displayDays: false,
        displayMonths: false,
      },
    };
  }
};

export const displayMonthController = (
  state: PickerState,
  pickerNumber: number
): PickerState => {
  const { pickerOne, pickerTwo } = state;

  if (pickerNumber === 1) {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
        displayMonths: true,
        displayYears: false,
        displayDays: false,
      },
      pickerTwo: {
        ...pickerTwo,
      },
    };
  } else {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
      },
      pickerTwo: {
        ...pickerTwo,
        displayMonths: true,
        displayYears: false,
        displayDays: false,
      },
    };
  }
};

export const displayDayController = (
  state: PickerState,
  pickerNumber: number
): PickerState => {
  const { pickerOne, pickerTwo } = state;

  if (pickerNumber === 1) {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
        displayDays: true,
        displayMonths: false,
        displayYears: false,
      },
      pickerTwo: {
        ...pickerTwo,
      },
    };
  } else {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
      },
      pickerTwo: {
        ...pickerTwo,
        displayDays: true,
        displayMonths: false,
        displayYears: false,
      },
    };
  }
};

export const getPreviousDecade = (
  state: PickerState,
  pickerNumber: number
): PickerState => {
  const { pickerOne, pickerTwo } = state;

  if (pickerNumber === 1) {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
        currentDecadeYear: pickerOne.currentDecadeYear - 10,
      },
      pickerTwo: {
        ...pickerTwo,
      },
    };
  } else {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
      },
      pickerTwo: {
        ...pickerTwo,
        currentDecadeYear: pickerTwo.currentDecadeYear - 10,
      },
    };
  }
};

export const getNextDecade = (
  state: PickerState,
  pickerNumber: number
): PickerState => {
  const { pickerOne, pickerTwo } = state;

  if (pickerNumber === 1) {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
        currentDecadeYear: pickerOne.currentDecadeYear + 10,
      },
      pickerTwo: {
        ...pickerTwo,
      },
    };
  } else {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
      },
      pickerTwo: {
        ...pickerTwo,
        currentDecadeYear: pickerTwo.currentDecadeYear + 10,
      },
    };
  }
};

export const updateMonth = (
  state: PickerState,
  payload: { pickerNumber: number; month: number }
): PickerState => {
  const { pickerOne, pickerTwo } = state;
  const { pickerNumber, month } = payload;

  if (pickerNumber === 1) {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
        month,
      },
      pickerTwo: {
        ...pickerTwo,
      },
    };
  } else {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
      },
      pickerTwo: {
        ...pickerTwo,
        month,
      },
    };
  }
};

export const updateYear = (
  state: PickerState,
  payload: { pickerNumber: number; year: number }
): PickerState => {
  const { pickerOne, pickerTwo } = state;
  const { pickerNumber, year } = payload;

  if (pickerNumber === 1) {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
        year,
      },
      pickerTwo: {
        ...pickerTwo,
      },
    };
  } else {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
      },
      pickerTwo: {
        ...pickerTwo,
        year,
      },
    };
  }
};

export const updateDay = (
  state: PickerState,
  payload: { pickerNumber: number; day: number }
): PickerState => {
  const { pickerOne, pickerTwo } = state;
  const { pickerNumber, day } = payload;

  if (pickerNumber === 1) {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
        day,
      },
      pickerTwo: {
        ...pickerTwo,
      },
    };
  } else {
    return {
      ...state,
      pickerOne: {
        ...pickerOne,
      },
      pickerTwo: {
        ...pickerTwo,
        day,
      },
    };
  }
};

export const syncPickers = (
  state: PickerState,
  pickerNumber: number
): PickerState => {
  const { pickerOne, pickerTwo } = state;
  const { month: monthOne, year: yearOne } = pickerOne;
  const { month: monthTwo, year: yearTwo } = pickerTwo;

  // Set initial values to have compatible return types.
  let updatedMonthOne = monthOne;
  let updatedMonthTwo = monthTwo;
  let updatedYearOne = yearOne;
  let updatedYearTwo = yearTwo;

  // Picker2's date should not be less than picker1's date.
  if (pickerNumber === 1) {
    if (yearOne > yearTwo) {
      updatedMonthTwo = monthOne === 11 ? 0 : monthOne + 1;
      updatedYearTwo = monthOne === 11 ? yearOne + 1 : yearOne;
    } else {
      if (monthOne > monthTwo) {
        updatedMonthTwo = monthOne === 11 ? 0 : monthOne + 1;
      }
    }
  } else {
    if (yearTwo < yearOne) {
      updatedMonthOne = monthTwo === 0 ? 11 : monthTwo - 1;
      updatedYearOne = monthTwo === 0 ? yearTwo - 1 : yearTwo;
    } else {
      if (monthTwo < monthOne) {
        updatedMonthOne = monthTwo === 0 ? 11 : monthTwo - 1;
      }
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

export const resetPickers = (state: PickerState): PickerState => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const { pickerOne, pickerTwo } = state;

  return {
    ...state,
    pickerOne: {
      ...pickerOne,
      day: 1,
      month,
      year,
      displayDays: true,
      displayMonths: false,
      displayYears: false,
    },
    pickerTwo: {
      ...pickerTwo,
      day: 1,
      month: month + 1,
      year: month === 11 ? year + 1 : year,
      displayDays: true,
      displayMonths: false,
      displayYears: false,
    },
  };
};

export const setPredefinedRange = (
  state: PickerState,
  days: number
): PickerState => {
  const date = new Date();
  const newDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - days
  );
  const { pickerOne, pickerTwo } = state;

  return {
    ...state,
    pickerOne: {
      ...pickerOne,
      day: newDate.getDate(),
      month: newDate.getMonth(),
      year: newDate.getFullYear(),
      displayDays: true,
      displayMonths: false,
      displayYears: false,
    },
    pickerTwo: {
      ...pickerTwo,
      displayDays: true,
      displayMonths: false,
      displayYears: false,
    },
  };
};
