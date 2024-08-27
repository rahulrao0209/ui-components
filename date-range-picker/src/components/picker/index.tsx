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
  return (
    <div className="picker">
      <div className="weekdays">
        {WEEK_DAYS.map((day: string) => {
          return <span>{day}</span>;
        })}
      </div>
    </div>
  );
};

export default Picker;
