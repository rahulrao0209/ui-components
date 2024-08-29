import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "./index.css";

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const PickerController = () => {
  const YearController = () => {};
  const MonthController = () => {};

  interface DayControllerProps {
    month: number;
    year: number;
  }

  const DayController = ({ month, year }: DayControllerProps) => {
    const monthName = MONTH_NAMES[month];

    return (
      <div className="day-controller">
        <button className="day-controller__back">
          <span className="day-controller__back-icon">
            <MdArrowBackIos />
          </span>
        </button>
        <button className="day-controller__btn">{`${monthName}, ${year}`}</button>
        <button className="day-controller__next">
          <span className="day-controller__next-icon">
            <MdArrowForwardIos />
          </span>
        </button>
      </div>
    );
  };

  return (
    <div className="picker-controller">
      <div>
        <DayController
          month={new Date().getMonth()}
          year={new Date().getFullYear()}
        />
      </div>
    </div>
  );
};

export default PickerController;
