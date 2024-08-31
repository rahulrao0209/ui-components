import { PickerContainer } from "./components";
import { PickerContextProvider, SelectedDatesContextProvider } from "./context";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <PickerContextProvider>
          <SelectedDatesContextProvider>
            <PickerContainer />
          </SelectedDatesContextProvider>
        </PickerContextProvider>
      </div>
    </>
  );
}

export default App;
