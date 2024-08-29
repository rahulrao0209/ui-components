import { PickerContextProps, PickerState } from "./interfaces";
import {
  PREVIOUS_MONTH,
  NEXT_MONTH,
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
    case PREVIOUS_MONTH:
      return getPreviousMonth(state, action.payload);
    case NEXT_MONTH:
      return getNextMonth(state, action.payload);
  }
  return state;
};
