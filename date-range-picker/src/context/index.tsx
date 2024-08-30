/** Create the DateContext for managing date picker state */

/**
 * The two pickers should always be managed independently, however
 * the second picker should always be at least one month ahead of the first picker.
 */

import { createContext, PropsWithChildren, useReducer } from "react";
import { pickerReducer } from "./reducer";
import { PickerContextProps, PickerState } from "./interfaces";
import {
  PREVIOUS_MONTH,
  NEXT_MONTH,
  PREVIOUS_DECADE,
  NEXT_DECADE,
  UPDATE_DAY,
  UPDATE_MONTH,
  UPDATE_YEAR,
  DISPLAY_DAYS,
  DISPLAY_MONTHS,
  DISPLAY_YEARS,
  SYNC_PICKERS,
} from "./actions";

export const PickerContext = createContext<PickerContextProps | null>(null);

export const PickerContextProvider = (props: PropsWithChildren) => {
  const initialPickerState: PickerState = {
    pickerOne: {
      day: new Date().getDay(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      currentDecadeYear: new Date().getFullYear(),
      displayDays: true,
      displayYears: false,
      displayMonths: false,
    },

    pickerTwo: {
      day: new Date().getDay(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      currentDecadeYear: new Date().getFullYear(),
      displayDays: true,
      displayYears: false,
      displayMonths: false,
    },
  };
  const [state, dispatch] = useReducer(pickerReducer, initialPickerState);

  const dispatchPreviousMonth = (pickerNumber: number) => {
    dispatch({
      type: PREVIOUS_MONTH,
      payload: pickerNumber,
    });
  };

  const dispatchNextMonth = (pickerNumber: number) => {
    dispatch({
      type: NEXT_MONTH,
      payload: pickerNumber,
    });
  };

  const dispatchPreviousDecade = (pickerNumber: number) => {
    dispatch({
      type: PREVIOUS_DECADE,
      payload: pickerNumber,
    });
  };

  const dispatchNextDecade = (pickerNumber: number) => {
    dispatch({
      type: NEXT_DECADE,
      payload: pickerNumber,
    });
  };

  const dispatchUpdateDay = (pickerNumber: number, day: number) => {
    dispatch({
      type: UPDATE_DAY,
      payload: {
        pickerNumber,
        day,
      },
    });
  };

  const dispatchUpdateMonth = (pickerNumber: number, month: number) => {
    dispatch({
      type: UPDATE_MONTH,
      payload: {
        pickerNumber,
        month,
      },
    });
  };

  const dispatchUpdateYear = (pickerNumber: number, year: number) => {
    dispatch({
      type: UPDATE_YEAR,
      payload: {
        pickerNumber,
        year,
      },
    });
  };

  const dispatchDisplayYears = (pickerNumber: number) => {
    dispatch({
      type: DISPLAY_YEARS,
      payload: pickerNumber,
    });
  };

  const dispatchDisplayMonths = (pickerNumber: number) => {
    dispatch({
      type: DISPLAY_MONTHS,
      payload: pickerNumber,
    });
  };

  const dispatchDisplayDays = (pickerNumber: number) => {
    dispatch({
      type: DISPLAY_DAYS,
      payload: pickerNumber,
    });
  };

  const dispatchSyncPickers = (pickerNumber: number) => {
    dispatch({
      type: SYNC_PICKERS,
      payload: pickerNumber,
    });
  };

  return (
    <PickerContext.Provider
      value={{
        state,
        dispatchPreviousMonth,
        dispatchNextMonth,
        dispatchPreviousDecade,
        dispatchNextDecade,
        dispatchUpdateDay,
        dispatchUpdateMonth,
        dispatchUpdateYear,
        dispatchDisplayYears,
        dispatchDisplayMonths,
        dispatchDisplayDays,
        dispatchSyncPickers,
      }}
    >
      {props.children}
    </PickerContext.Provider>
  );
};

export default PickerContextProvider;
