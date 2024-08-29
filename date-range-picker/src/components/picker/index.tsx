import { Days, Months, Years, PickerController } from "../index";
import { getMonthData } from "../../utils";
import "./index.css";

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Picker = () => {
  const { previousMonthDays, currentMonthDays, nextMonthDays } = getMonthData();

  return (
    <div className="picker">
      <PickerController />
      <div className="picker__view">
        <Days
          currentMonthDays={currentMonthDays}
          previousMonthDays={previousMonthDays}
          nextMonthDays={nextMonthDays}
        />
      </div>
    </div>
  );
};

export default Picker;
