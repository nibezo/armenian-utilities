import { useState } from "react";
import classes from "./App.module.css";
import Utilities from "./components/Utilities/Utilities.jsx";
import RoommatesInput from "./components/RoommatesInput.jsx";
function App() {
  return (
    <>
      <div className={classes.inputdata}>
        <Utilities />
        <RoommatesInput />
      </div>
    </>
  );
}

export default App;
