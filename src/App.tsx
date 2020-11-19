import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

type BtnsType = {
    [key: string]: BtnType
};
export type BtnType = {
    descr: string
    callback: () => void
    disabled: boolean
}

function App() {
    const [maxValue, setMaxValue] = useState<number>(5);
    const [minValue, setMinValue] = useState<number>(0);
    const [displayValue, setDisplayValue] = useState<number | string>(minValue);
    const [settingsMode, setSettingsMode] = useState<boolean>(false);
    const error = minValue >= maxValue || minValue < 0;

    const btns:BtnsType = {
        setBtn: {descr: "set", callback: setValues, disabled: !settingsMode},
        incBtn: {descr: "inc", callback: incDisplayValue, disabled: settingsMode ||  maxValue === displayValue},
        resetBtn: {descr: "reset", callback: resetDisplayValue, disabled: settingsMode || minValue === displayValue},
    }


    function changeMaxValue(value: number) {
        setSettingsMode(true);
        setMaxValue(value);
    }

    function changeMinValue(value: number) {
        setSettingsMode(true)
        setMinValue(value);
        setDisplayValue(value);
    }

    function setValues() {
        setSettingsMode(false);
    }

    function incDisplayValue() {
        const newValue = Number(displayValue) + 1;
        if(newValue <= maxValue) {
            setDisplayValue(newValue);
        }
    }

    function resetDisplayValue() {
        setDisplayValue(minValue);
    }

    return (
        <div className="App">
            <Counter
                error={error}
                settingsMode={settingsMode}
                maxValue={maxValue}
                minValue={minValue}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
                buttons={[btns.setBtn] } />
            <Counter
                error={error}
                settingsMode={settingsMode}
                displayValue={displayValue}
                maxValue={maxValue}
                buttons={[ btns.incBtn, btns.resetBtn ]}
            />

        </div>
    );
}

export default App;
