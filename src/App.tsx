import React from 'react';
import './App.css';
import { Display } from './components/Display/Display';

function App() {
  return (
    <div className="App">
      <div className="shell">
        <Display displayValue="5" />
        <div className="buttons">
        </div>
      </div>
    </div>
  );
}

export default App;
