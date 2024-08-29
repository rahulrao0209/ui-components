import { PickerContextProps, PickerState } from "./interfaces";
import {
  PREVIOUS_MONTH_PICKER_ONE,
  PREVIOUS_MONTH_PICKER_TWO,
  NEXT_MONTH_PICKER_ONE,
  NEXT_MONTH_PICKER_TWO,
  getPreviousMonth,
  getNextMonth,
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
    case PREVIOUS_MONTH_PICKER_ONE:
      return getPreviousMonth(state, action.payload);
    case NEXT_MONTH_PICKER_ONE:
      return getNextMonth(state, action.payload);
  }
  return state;
};
