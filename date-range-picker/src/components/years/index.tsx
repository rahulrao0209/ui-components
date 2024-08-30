import { getYears } from "../../utils";
import "./index.css";

interface YearProps {
  currentDecadeYear: number;
}
const Years = ({ currentDecadeYear }: YearProps) => {
  const { allYearsInGrid, decade } = getYears(currentDecadeYear);
  return (
    <div className="years">
      {allYearsInGrid.map((year) => (
        <span
          key={year}
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
