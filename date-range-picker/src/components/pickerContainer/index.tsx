import { useContext } from "react";
import { MdCalendarMonth } from "react-icons/md";
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
  const pickerOneCurrentDecadeYear =
    pickerContext?.state.pickerOne.currentDecadeYear ?? defaultYear;
  const pickerTwoCurrentDecadeYear =
    pickerContext?.state.pickerTwo.currentDecadeYear ?? defaultYear;
  const pickerOneDisplayDays =
    pickerContext?.state.pickerOne.displayDays ?? true;
  const pickerTwoDisplayDays =
    pickerContext?.state.pickerTwo.displayDays ?? true;
  const pickerOneDisplayMonths =
    pickerContext?.state.pickerOne.displayMonths ?? false;
  const pickerTwoDisplayMonths =
    pickerContext?.state.pickerTwo.displayMonths ?? false;
  const pickerOneDisplayYears =
    pickerContext?.state.pickerOne.displayYears ?? false;
  const pickerTwoDisplayYears =
    pickerContext?.state.pickerTwo.displayYears ?? false;

  // Picker methods
  const dispatchPreviousMonth = pickerContext!.dispatchPreviousMonth;
  const dispatchNextMonth = pickerContext!.dispatchNextMonth;
  const dispatchDisplayYears = pickerContext!.dispatchDisplayYears;

  return (
    <main className="picker-container">
      <div className="range-display">
        <div className="range-display__start-date">
          <span className="range-display__icon">
            <MdCalendarMonth className="range-display__icon-icon" />
          </span>
          <span className="range-display__value">{`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`}</span>
        </div>
        <div className="range-display__separator">~</div>
        <div className="range-display__start-date">
          <span className="range-display__icon">
            <MdCalendarMonth className="range-display__icon-icon" />
          </span>
          <span className="range-display__value">{`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`}</span>
        </div>
      </div>
      <div className="pickers">
        <Picker
          pickerNumber={1}
          month={pickerOneMonth}
          year={pickerOneYear}
          currentDecadeYear={pickerOneCurrentDecadeYear}
          displayDays={pickerOneDisplayDays}
          displayMonths={pickerOneDisplayMonths}
          displayYears={pickerOneDisplayYears}
          dispatchPreviousMonth={dispatchPreviousMonth}
          dispatchNextMonth={dispatchNextMonth}
          dispatchDisplayYears={dispatchDisplayYears}
        />
        <Picker
          pickerNumber={2}
          month={pickerTwoMonth}
          year={pickerTwoYear}
          currentDecadeYear={pickerTwoCurrentDecadeYear}
          displayDays={pickerTwoDisplayDays}
          displayMonths={pickerTwoDisplayMonths}
          displayYears={pickerTwoDisplayYears}
          dispatchPreviousMonth={dispatchPreviousMonth}
          dispatchNextMonth={dispatchNextMonth}
          dispatchDisplayYears={dispatchDisplayYears}
        />
      </div>
    </main>
  );
};

export default PickerContainer;
