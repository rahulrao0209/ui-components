import { PickerContainer } from "./components";
import { PickerContextProvider } from "./context";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <PickerContextProvider>
          <PickerContainer />
        </PickerContextProvider>
      </div>
    </>
  );
}

export default App;
