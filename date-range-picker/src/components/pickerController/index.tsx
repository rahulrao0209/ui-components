import { getYears } from "../../utils";
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

interface PickerControllerProps {
  month: number;
  year: number;
  currentDecadeYear: number;
  displayDays: boolean;
  displayMonths: boolean;
  displayYears: boolean;
  dispatchPreviousMonth: () => void;
  dispatchNextMonth: () => void;
  dispatchDisplayYears: () => void;
  dispatchPreviousDecade: () => void;
  dispatchNextDecade: () => void;
}

const PickerController = (props: PickerControllerProps) => {
  const {
    month,
    year,
    currentDecadeYear,
    displayDays,
    displayMonths,
    displayYears,
    dispatchPreviousMonth,
    dispatchNextMonth,
    dispatchDisplayYears,
    dispatchPreviousDecade,
    dispatchNextDecade,
  } = props;

  interface DayControllerProps {
    month: number;
    year: number;
  }

  const DayController = ({ month, year }: DayControllerProps) => {
    const monthName = MONTH_NAMES[month];

    return (
      <div className="day-controller">
        <button
          className="day-controller__back"
          onClick={dispatchPreviousMonth}
        >
          <span className="day-controller__back-icon">
            <MdArrowBackIos />
          </span>
        </button>
        <button
          className="day-controller__btn"
          onClick={dispatchDisplayYears}
        >{`${monthName}, ${year}`}</button>
        <button className="day-controller__next" onClick={dispatchNextMonth}>
          <span className="day-controller__next-icon">
            <MdArrowForwardIos />
          </span>
        </button>
      </div>
    );
  };

  const YearController = () => {
    const { decade } = getYears(currentDecadeYear);
    const decadeStartYear = decade[0];
    const decadeEndYear = decade[decade.length - 1];

    return (
      <div className="year-controller">
        <button
          className="year-controller__back"
          onClick={dispatchPreviousDecade}
        >
          <span className="year-controller__back-icon">
            <MdArrowBackIos />
          </span>
        </button>
        <button
          className="year-controller__btn"
          // onClick={dispatchDisplayYears}
        >{`${decadeStartYear} - ${decadeEndYear}`}</button>
        <button className="year-controller__next" onClick={dispatchNextDecade}>
          <span className="year-controller__next-icon">
            <MdArrowForwardIos />
          </span>
        </button>
      </div>
    );
  };

  const MonthController = () => {
    return <div>Month controller</div>;
  };

  return (
    <div className="picker-controller">
      {displayDays ? <DayController month={month} year={year} /> : null}
      {displayMonths ? <MonthController /> : null}
      {displayYears ? <YearController /> : null}
    </div>
  );
};

export default PickerController;
