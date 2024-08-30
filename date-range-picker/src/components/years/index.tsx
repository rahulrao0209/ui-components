import { MouseEventHandler } from "react";
import { getYears } from "../../utils";
import "./index.css";

interface YearProps {
  pickerNumber: number;
  currentDecadeYear: number;
  dispatchDisplayMonths: () => void;
  dispatchUpdateYear: (pickerNumber: number, year: number) => void;
}

const Years = ({
  pickerNumber,
  currentDecadeYear,
  dispatchDisplayMonths,
  dispatchUpdateYear,
}: YearProps) => {
  const { allYearsInGrid, decade } = getYears(currentDecadeYear);

  const handleSelectYear = (event: any) => {
    const element = event.target;
    const classlist = element.classList;
    const year = element.dataset?.year;
    const classes: string = classlist.value;

    if (!classes.includes("year")) return;
    dispatchDisplayMonths();
    console.log("year: ", year);
    dispatchUpdateYear(pickerNumber, parseInt(year));
  };

  return (
    <div className="years" onClick={handleSelectYear}>
      {allYearsInGrid.map((year) => (
        <span
          key={year}
          data-year={year}
          className={`year ${!decade.includes(year) ? "year--next" : ""} ${
            year === new Date().getFullYear() ? "year--current" : ""
          }`}
        >
          {year}
        </span>
      ))}
    </div>
  );
};

export default Years;
