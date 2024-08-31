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
    // console.log(day);
    dispatchUpdateDay(pickerNumber, parseInt(day));
    handleSetDate(parseInt(day));
  };

  const isInRange = () => {};

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
