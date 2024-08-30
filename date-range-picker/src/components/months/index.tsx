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

interface MonthProps {
  pickerNumber: number;
  dispatchDisplayDays: () => void;
  dispatchUpdateMonth: (pickerNumber: number, month: number) => void;
  dispatchSyncPickers: (pickerNumber: number) => void;
}

const Months = ({
  pickerNumber,
  dispatchDisplayDays,
  dispatchUpdateMonth,
  dispatchSyncPickers,
}: MonthProps) => {
  const handleSelectMonth = (event: any) => {
    const element = event.target;
    const classlist = element.classList;
    const month = element.dataset?.month;
    const classes: string = classlist.value;

    if (!classes.includes("month")) return;
    dispatchDisplayDays();
    console.log("month: ", month);
    dispatchUpdateMonth(pickerNumber, parseInt(month));
    dispatchSyncPickers(pickerNumber);
  };

  return (
    <div className="months" onClick={handleSelectMonth}>
      {MONTH_NAMES.map((monthName, idx) => (
        <span
          key={monthName}
          data-month={idx}
          className={`month ${
            new Date().getMonth() === idx ? "month--current" : ""
          }`}
        >
          {monthName}
        </span>
      ))}
    </div>
  );
};

export default Months;
