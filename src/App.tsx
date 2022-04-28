import React from "react";
import "./App.css";
import TestComponent from "./TestComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App" />
      </header>
    </div>
  );
};

export default App;
