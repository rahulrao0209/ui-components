import { PickerContextProps, PickerState } from "./interfaces";
import {
  PREVIOUS_MONTH,
  NEXT_MONTH,
  DISPLAY_DAYS,
  DISPLAY_MONTHS,
  DISPLAY_YEARS,
  getPreviousMonth,
  getNextMonth,
  displayYearController,
  PREVIOUS_DECADE,
  getPreviousDecade,
  NEXT_DECADE,
  getNextDecade,
} from "./actions";

interface Action {
  type: string;
  payload?: any;
}

export const pickerReducer = (
  state: PickerState,
  action: Action
): PickerState => {
  switch (action.type) {
    case PREVIOUS_MONTH:
      return getPreviousMonth(state, action.payload);
    case NEXT_MONTH:
      return getNextMonth(state, action.payload);
    case PREVIOUS_DECADE:
      return getPreviousDecade(state, action.payload);
    case NEXT_DECADE:
      return getNextDecade(state, action.payload);
    case DISPLAY_YEARS:
      return displayYearController(state, action.payload);
  }
  return state;
};
