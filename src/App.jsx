import { useState } from "react";
import "./App.css";
import Utilities from "./components/Utilities.jsx";
import RoommatesInput from "./components/RoommatesInput.jsx";
function App() {
  return (
    <>
      <div className="input-data">
        <Utilities />
        <RoommatesInput />
      </div>
    </>
  );
}

export default App;
