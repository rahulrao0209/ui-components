import { Picker } from "../index";
import "./index.css";
const PickerContainer = () => {
  return (
    <main className="picker-container">
      <div className="pickers">
        <Picker />
        <Picker />
      </div>
    </main>
  );
};

export default PickerContainer;
