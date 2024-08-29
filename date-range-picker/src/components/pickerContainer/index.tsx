import { useContext } from "react";
import { Picker } from "../index";
import { PickerContext } from "../../context";
import "./index.css";

const PickerContainer = () => {
  const pickerContext = useContext(PickerContext);
  const defaultMonth = new Date().getMonth();
  const defaultYear = new Date().getFullYear();
  const pickerOneMonth = pickerContext?.pickerOne.month ?? defaultMonth;
  const pickerOneYear = pickerContext?.pickerOne.year ?? defaultYear;
  const pickerTwoMonth = pickerContext?.pickerTwo.month ?? defaultMonth;
  const pickerTwoYear = pickerContext?.pickerTwo.year ?? defaultYear;

  return (
    <main className="picker-container">
      <div className="pickers">
        <Picker month={pickerOneMonth} year={pickerOneYear} />
        <Picker month={pickerTwoMonth} year={pickerTwoYear} />
      </div>
    </main>
  );
};

export default PickerContainer;
