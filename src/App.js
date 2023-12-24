import './App.css';
import React, {useState, useEffect } from 'react';
import { Switch } from 'antd';

function App() {
  let [electricity, setElectricity] = useState(false);
  let [gas, setGas] = useState(false);
  let [water, setWater] = useState(false);

  function handleClickOfElectricity() {
    setElectricity(electricity ? false : true);
  }
  function handleClickOfGas() {
    setGas(gas ? false : true);
  }
  function handleClickOfWater() {
    setWater(water ? false : true);
  }

  useEffect(() => {
    console.log(electricity, gas, water)
  })
  return (
    <div className="App">
      <h1>Armenian utilities control panel</h1>
      <div className="Util">
        <Switch checked={electricity} size="large" style={{ margin: 10}} onClick={handleClickOfElectricity}/>
        <p>Electricity</p>
      </div>
      <div className="Util">
        <Switch checked={gas} size="large" style={{ margin: 10}} onClick={handleClickOfGas}/>
        <p>Gas</p>
      </div>
      <div className="Util">
        <Switch checked={water} size="large" style={{ margin: 10}} onClick={handleClickOfWater}/>
        <p>Water</p>
      </div>
    </div>
  );
}

export default App;
