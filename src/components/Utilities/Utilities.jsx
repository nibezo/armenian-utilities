import { useState } from "react";
import classes from "./Utilities.module.css";

export default function Utilities() {
  const [water, setWater] = useState(2500);
  const [electricity, setElectricity] = useState(9000);
  const [gas, setGas] = useState(15000);
  function handleGasInputChange(event) {
    setGas(event.target.value);
  }
  function handleWaterInputChange(event) {
    setWater(event.target.value);
  }
  function handleElectricityInputChange(event) {
    setElectricity(event.target.value);
  }
  return (
    <>
      <div className={classes.utilities}>
        <div className="utilities__water">
          <p className="utilities__water-text">Вода</p>
          <input
            type="number"
            class="utilities__water-input"
            value={water}
            onChange={handleWaterInputChange}
          />
        </div>
        <div className="utilities__electricity">
          <p className="utilities__electricity-text">Электричество</p>
          <input
            type="number"
            class="utilities__electricity-input"
            value={electricity}
            onChange={handleElectricityInputChange}
          />
        </div>
        <div className="utilities__gas">
          <p className="utilities__gas-text">Газ</p>
          <input
            type="number"
            class="utilities__gas-input"
            value={gas}
            onChange={handleGasInputChange}
          />
        </div>
      </div>
    </>
  );
}
