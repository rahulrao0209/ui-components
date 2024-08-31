import "./index.css";

interface PredefinedRangeProps {
  dispatchSetPredefinedRange: (days: number) => void;
  onPredefinedRange: (days: number) => void;
}
const PredefinedDateRanges = ({
  dispatchSetPredefinedRange,
  onPredefinedRange,
}: PredefinedRangeProps) => {
  const handlePredefinedRange = (range: number) => {
    dispatchSetPredefinedRange(range);
    onPredefinedRange(range);
  };

  return (
    <div className="predefined-date-ranges">
      <button
        className="last-7-days-button"
        onClick={() => handlePredefinedRange(7)}
      >
        Last 7 days
      </button>
      <button
        className="last-30-days-button"
        onClick={() => handlePredefinedRange(30)}
      >
        Last 30 days
      </button>
    </div>
  );
};

export default PredefinedDateRanges;
