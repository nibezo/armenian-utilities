import './App.css';
import React, {useState } from 'react';
import { Switch } from 'antd';

function App() {
  return (
    <div className="App">
      <h1>Armenian utilities control panel</h1>
      <div className="Util">
        <Switch size="large" style={{ margin: 10}}/>
        <p>Electricity</p>
      </div>
      <div className="Util">
        <Switch size="large" style={{ margin: 10}}/>
        <p>Gas</p>
      </div>
      <div className="Util">
        <Switch size="large" style={{ margin: 10}}/>
        <p>Water</p>
      </div>
    </div>
  );
}

export default App;
