import { PickerContextProps } from "./interfaces";

export const pickerReducer = (state: PickerContextProps, action: any) => {
  console.log("staate: ", state);
  return state;
};

/**
 * Picker actions
 * - UPDATE_MONTH_PICKER_ONE
 * - UPDATE_MONTH_PICKER_TWO
 * - UPDATE_YEAR_PICKER_ONE
 * - UPDATE_YEAR_PICKER_TWO
 * - NEXT_MONTH_PICKER_ONE
 * - NEXT_MONTH_PICKER_TWO
 * - PREVIOUS_MONTH_PICKER_ONE
 * - PREVIOUS_MONTH_PICKER_TWO
 * - DISPLAY_DAYS_PICKER_ONE
 * - DISPLAY_DAYS_PICKER_TWO
 * - DISPLAY_YEARS_PICKER_ONE
 * - DISPLAY_YEARS_PICKER_TWO
 * - DISPLAY_MONTHS_PICKER_ONE
 * - DISPLAY_MONTHS_PICKER_TWO
 */
