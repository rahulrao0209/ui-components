import { Days, Months, Years, PickerController } from "../index";
import { getMonthData } from "../../utils";
import "./index.css";

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const MONTH_NAMES = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

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
