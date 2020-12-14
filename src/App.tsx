import * as React from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { ToggleSwitch } from "./components/Toggle/Toggle";

const App = () => {
  let [addNumber, setAddNumber] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Add Numbers : <ToggleSwitch Name="addNumbers" checked={addNumber} onChanged={setAddNumber}/>
        </div>
        
        <Button addNumbers={addNumber}/>
      </header>
    </div>
  );
};

export default App;