import { useContext } from "react";
import { PickerContext, SelectedDateContext } from "../../context";
import { DateDetails } from "../../types";
import { isToday } from "../../utils";
import "./index.css";

interface DayProps {
  pickerNumber: number;
  previousMonthDays: DateDetails[];
  currentMonthDays: DateDetails[];
  nextMonthDays: DateDetails[];
  dispatchUpdateDay: (pickerNumber: number, day: number) => void;
}
const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Days = ({
  pickerNumber,
  previousMonthDays,
  currentMonthDays,
  nextMonthDays,
  dispatchUpdateDay,
}: DayProps) => {
  const selectedDateContext = useContext(SelectedDateContext);
  const pickerContext = useContext(PickerContext);

  const handleSetDate = (day: number) => {
    if (!selectedDateContext) return;
    if (!pickerContext) return;

    const { state } = pickerContext;
    const { onSelectDate } = selectedDateContext;
    let picker;

    if (pickerNumber === 1) {
      picker = state.pickerOne;
    } else {
      picker = state.pickerTwo;
    }

    const date = new Date(picker.year, picker.month, day);
    onSelectDate(date);
  };

  const handleSelectDay = (event: any) => {
    const element = event.target;
    const day = element?.dataset.day;
    const classlist = element.classList;
    const classes = classlist.value;

    if (!classes.includes("days")) return;
    if (classes.includes("previous")) return;
    if (classes.includes("next")) return;
    if (classes.includes("weekend")) return;
    dispatchUpdateDay(pickerNumber, parseInt(day));
    handleSetDate(parseInt(day));
  };

  const isInRange = (day: number) => {
    if (!selectedDateContext) return false;
    if (!pickerContext) return false;

    const { startDate, endDate } = selectedDateContext;
    if (!startDate || !endDate) return false;
    const { state } = pickerContext;
    const { pickerOne, pickerTwo } = state;
    let inRange = false;

    if (pickerNumber === 1) {
      const month = pickerOne.month;
      const year = pickerOne.year;
      const currentDate = new Date(year, month, day);
      inRange = currentDate >= startDate && currentDate <= endDate;
    } else {
      const month = pickerTwo.month;
      const year = pickerTwo.year;
      const currentDate = new Date(year, month, day);
      inRange = currentDate >= startDate && currentDate <= endDate;
    }

    return inRange;
  };

  const isWeekend = (dateDetail: DateDetails) => {
    const date = new Date(dateDetail.year, dateDetail.month, dateDetail.day);
    const day = date.getDay();
    if (day === 0 || day === 6) return true;
    return false;
  };

  return (
    <div className="days" onClick={handleSelectDay}>
      {WEEK_DAYS.map((day: string) => {
        return (
          <span key={day} className="weekday">
            {day}
          </span>
        );
      })}
      {previousMonthDays.map((dateDetail: DateDetails) => (
        <span
          className="days__day days--previous"
          key={`${dateDetail.year}-${dateDetail.month}-${dateDetail.day}`}
          data-day={dateDetail.day}
        >
          {dateDetail.day}
        </span>
      ))}
      {currentMonthDays.map((dateDetail: DateDetails) => (
        <span
          className={`days__day days--current ${
            isToday(dateDetail) ? "today" : ""
          } ${isInRange(dateDetail.day) ? "in-range" : ""} ${
            isWeekend(dateDetail) ? "weekend" : ""
          }`}
          key={`${dateDetail.year}-${dateDetail.month}-${dateDetail.day}`}
          data-day={dateDetail.day}
        >
          {dateDetail.day}
        </span>
      ))}
      {nextMonthDays.map((dateDetail: DateDetails) => (
        <span
          className="days__day days--next"
          key={`${dateDetail.year}-${dateDetail.month}-${dateDetail.day}`}
          data-day={dateDetail.day}
        >
          {dateDetail.day}
        </span>
      ))}
    </div>
  );
};

export default Days;
