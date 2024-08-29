import { Days, Months, Years, PickerController } from "../index";
import { getMonthData } from "../../utils";
import "./index.css";

interface PickerProps {
  month: number;
  year: number;
  pickerNumber: number;
  dispatchPreviousMonth: (pickerNumber: number) => void;
  dispatchNextMonth: (pickerNumber: number) => void;
}

const Picker = ({
  month,
  year,
  pickerNumber,
  dispatchPreviousMonth,
  dispatchNextMonth,
}: PickerProps) => {
  const { previousMonthDays, currentMonthDays, nextMonthDays } = getMonthData(
    month,
    year
  );

  return (
    <div className="picker">
      <div className="picker__view">
        <PickerController
          month={month}
          year={year}
          dispatchNextMonth={() => dispatchNextMonth(pickerNumber)}
          dispatchPreviousMonth={() => dispatchPreviousMonth(pickerNumber)}
        />
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
