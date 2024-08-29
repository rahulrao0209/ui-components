import { useContext } from "react";
import { Picker } from "../index";
import { PickerContext } from "../../context";
import "./index.css";

const PickerContainer = () => {
  const pickerContext = useContext(PickerContext);
  // Picker state
  const defaultMonth = new Date().getMonth();
  const defaultYear = new Date().getFullYear();
  const pickerOneMonth = pickerContext?.state.pickerOne.month ?? defaultMonth;
  const pickerOneYear = pickerContext?.state.pickerOne.year ?? defaultYear;
  const pickerTwoMonth = pickerContext?.state.pickerTwo.month ?? defaultMonth;
  const pickerTwoYear = pickerContext?.state.pickerTwo.year ?? defaultYear;

  // Picker methods
  const dispatchPreviousMonth = pickerContext!.dispatchPreviousMonth;
  const dispatchNextMonth = pickerContext!.dispatchNextMonth;

  return (
    <main className="picker-container">
      <div className="pickers">
        <Picker
          month={pickerOneMonth}
          year={pickerOneYear}
          pickerNumber={1}
          dispatchPreviousMonth={dispatchPreviousMonth}
          dispatchNextMonth={dispatchNextMonth}
        />
        <Picker
          month={pickerTwoMonth}
          year={pickerTwoYear}
          pickerNumber={2}
          dispatchPreviousMonth={dispatchPreviousMonth}
          dispatchNextMonth={dispatchNextMonth}
        />
      </div>
    </main>
  );
};

export default PickerContainer;
