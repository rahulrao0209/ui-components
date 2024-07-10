import { Button } from "./components";
import "./App.scss";

const COLORS = {
  SUCCESS: "#76b852",
  WARNING: "#f0c92e",
  ERROR: "#e03232",
};

function App() {
  return (
    <>
      <div className="buttons-container">
        <div className="buttons">
          <Button text="success" color={COLORS.SUCCESS} />
          <Button text="warning" color={COLORS.WARNING} />
          <Button text="error" color={COLORS.ERROR} />
        </div>
      </div>
    </>
  );
}

export default App;
