export interface PickerProps {
  month: number;
  year: number;
  displayDays: boolean;
  displayYears: boolean;
  displayMonths: boolean;
}

export interface PickerContextProps {
  pickerOne: PickerProps;
  pickerTwo: PickerProps;
}
