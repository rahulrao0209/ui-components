export interface PickerProps {
  day: number;
  month: number;
  year: number;
  currentDecadeYear: number;
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
  dispatchPreviousDecade: (pickerNumber: number) => void;
  dispatchNextDecade: (pickerNumber: number) => void;
  dispatchUpdateDay: (pickerNumber: number, day: number) => void;
  dispatchUpdateMonth: (pickerNumber: number, month: number) => void;
  dispatchUpdateYear: (pickerNumber: number, year: number) => void;
  dispatchDisplayYears: (pickerNumber: number) => void;
  dispatchDisplayMonths: (pickerNumber: number) => void;
  dispatchDisplayDays: (pickerNumber: number) => void;
  dispatchSyncPickers: (pickerNumber: number) => void;
}
