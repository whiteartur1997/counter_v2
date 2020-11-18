import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Display } from './components/Display/Display';

function App() {
  const [maxValue, setMaxValue] = useState<number>(5);
  const [minValue, setMinValue] = useState<number>(0);
  const [displayValue, setDisplayValue] = useState<number>(minValue);

  return (
    <div className="App">
      <div className="counter">
        <Display displayValue={displayValue} />
        <div className="buttons">
          <Button descr="set" onClick={() => {}} />
        </div>
      </div>
      <div className="counter">
        <Display 
          maxValue={maxValue} 
          minValue={minValue}
          changeMaxValue={changeMaxValue}
          changeMinValue={changeMinValue} />
        <div className="buttons">
          <Button descr="inc" onClick={() => {}} />
          <Button descr="reset" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default App;
