import { DateDetails } from "../../types";
import { isToday } from "../../utils";
import "./index.css";

interface DayProps {
  previousMonthDays: DateDetails[];
  currentMonthDays: DateDetails[];
  nextMonthDays: DateDetails[];
}
const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Days = ({
  previousMonthDays,
  currentMonthDays,
  nextMonthDays,
}: DayProps) => {
  return (
    <div className="days">
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
        >
          {dateDetail.day}
        </span>
      ))}
      {nextMonthDays.map((dateDetail: DateDetails) => (
        <span
          className="days__day days--next"
          key={`${dateDetail.year}-${dateDetail.month}-${dateDetail.day}`}
        >
          {dateDetail.day}
        </span>
      ))}
    </div>
  );
};

export default Days;
