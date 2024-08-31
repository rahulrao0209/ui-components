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
  const dispatchDisplayMonths = pickerContext!.dispatchDisplayMonths;
  const dispatchDisplayDays = pickerContext!.dispatchDisplayDays;
  const dispatchUpdateDay = pickerContext!.dispatchUpdateDay;
  const dispatchUpdateMonth = pickerContext!.dispatchUpdateMonth;
  const dispatchUpdateYear = pickerContext!.dispatchUpdateYear;
  const dispatchSyncPickers = pickerContext!.dispatchSyncPickers;

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
            pickerNumber={pickerNumber}
            currentMonthDays={currentMonthDays}
            previousMonthDays={previousMonthDays}
            nextMonthDays={nextMonthDays}
            dispatchUpdateDay={dispatchUpdateDay}
          />
        ) : null}
        {displayMonths ? (
          <Months
            pickerNumber={pickerNumber}
            dispatchDisplayDays={() => dispatchDisplayDays(pickerNumber)}
            dispatchUpdateMonth={dispatchUpdateMonth}
            dispatchSyncPickers={dispatchSyncPickers}
          />
        ) : null}
        {displayYears ? (
          <Years
            pickerNumber={pickerNumber}
            currentDecadeYear={currentDecadeYear}
            dispatchDisplayMonths={() => dispatchDisplayMonths(pickerNumber)}
            dispatchUpdateYear={dispatchUpdateYear}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Picker;
