export interface PickerProps {
  month: number;
  year: number;
  displayDays: boolean;
  displayYears: boolean;
  displayMonths: boolean;
}

export interface PickerState {
  pickerOne: PickerProps;
  pickerTwo: PickerProps;
}

export interface PickerContextProps {
  state: PickerState;
  dispatchPreviousMonth: (pickerNumber: number) => void;
  dispatchNextMonth: (pickerNumber: number) => void;
}
