import { useContext } from "react";
import { PickerContext } from "../../context";
import { Days, Months, Years, PickerController } from "../index";
import { getMonthData } from "../../utils";
import "./index.css";

interface PickerProps {
  pickerNumber: number;
  month: number;
  year: number;
  currentDecadeYear: number;
  displayDays: boolean;
  displayMonths: boolean;
  displayYears: boolean;
  dispatchPreviousMonth: (pickerNumber: number) => void;
  dispatchNextMonth: (pickerNumber: number) => void;
  dispatchDisplayYears: (pickerNumber: number) => void;
}

const Picker = ({
  pickerNumber,
  month,
  year,
  currentDecadeYear,
  displayDays,
  displayMonths,
  displayYears,
  dispatchPreviousMonth,
  dispatchNextMonth,
  dispatchDisplayYears,
}: PickerProps) => {
  const pickerContext = useContext(PickerContext);
  const dispatchNextDecade = pickerContext!.dispatchNextDecade;
  const dispatchPreviousDecade = pickerContext!.dispatchPreviousDecade;

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
          currentDecadeYear={currentDecadeYear}
          displayDays={displayDays}
          displayMonths={displayMonths}
          displayYears={displayYears}
          dispatchNextMonth={() => dispatchNextMonth(pickerNumber)}
          dispatchPreviousMonth={() => dispatchPreviousMonth(pickerNumber)}
          dispatchDisplayYears={() => dispatchDisplayYears(pickerNumber)}
          dispatchPreviousDecade={() => dispatchPreviousDecade(pickerNumber)}
          dispatchNextDecade={() => dispatchNextDecade(pickerNumber)}
        />
        {displayDays ? (
          <Days
            currentMonthDays={currentMonthDays}
            previousMonthDays={previousMonthDays}
            nextMonthDays={nextMonthDays}
          />
        ) : null}
        {displayMonths ? <Months /> : null}
        {displayYears ? <Years currentDecadeYear={currentDecadeYear} /> : null}
      </div>
    </div>
  );
};

export default Picker;
