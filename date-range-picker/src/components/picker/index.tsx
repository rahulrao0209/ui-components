import { Days, Months, Years, PickerController } from "../index";
import { getMonthData } from "../../utils";
import "./index.css";

interface PickerProps {
  month: number;
  year: number;
}

const Picker = ({ month, year }: PickerProps) => {
  const { previousMonthDays, currentMonthDays, nextMonthDays } = getMonthData(
    month,
    year
  );

  return (
    <div className="picker">
      <div className="picker__view">
        <PickerController month={month} year={year} />
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
