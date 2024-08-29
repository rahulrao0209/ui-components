/** Create the DateContext for managing date picker state */

/**
 * The two pickers should always be managed independently, however
 * the second picker should always be at least one month ahead of the first picker.
 */

import { createContext, PropsWithChildren, useReducer } from "react";
import { pickerReducer } from "./reducer";
import { PickerContextProps, PickerState } from "./interfaces";
import { PREVIOUS_MONTH, NEXT_MONTH } from "./actions";

export const PickerContext = createContext<PickerContextProps | null>(null);

export const PickerContextProvider = (props: PropsWithChildren) => {
  const initialPickerState: PickerState = {
    pickerOne: {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      displayDays: true,
      displayYears: false,
      displayMonths: false,
    },

    pickerTwo: {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
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

  return (
    <PickerContext.Provider
      value={{
        state,
        dispatchPreviousMonth,
        dispatchNextMonth,
      }}
    >
      {props.children}
    </PickerContext.Provider>
  );
};

export default PickerContextProvider;
