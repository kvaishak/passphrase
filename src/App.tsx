import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button/Button";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Pass-phrase</h1> */}
        <Button />
      </header>
    </div>
  );
};

export default App;