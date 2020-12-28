import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Counter } from "./components/Counter/Counter";
import { AppStateType, setDisplayValue, setMaxValue, setMinValue, setSettingsMode } from './redux/store';

type BtnsType = {
    [key: string]: BtnType
};
export type BtnType = {
    descr: string
    callback: () => void
    disabled: boolean
}

function App() {
    const dispatch = useDispatch();
    const { maxValue, minValue, displayValue, settingsMode } = useSelector((state: AppStateType) => state);
    const error = minValue >= maxValue || minValue < 0;

    const btns: BtnsType = {
        setBtn: { descr: "set", callback: setValues, disabled: !settingsMode },
        incBtn: { descr: "inc", callback: incDisplayValue, disabled: settingsMode || maxValue === displayValue },
        resetBtn: { descr: "reset", callback: resetDisplayValue, disabled: settingsMode || minValue === displayValue },
    }


    function changeMaxValue(value: number) {
        dispatch(setSettingsMode(true))
        dispatch(setMaxValue(value));
        localStorage.setItem("maxValue", String(value));
    }

    function changeMinValue(value: number) {
        dispatch(setSettingsMode(true));
        dispatch(setMinValue(value));
        dispatch(setDisplayValue(value));
        localStorage.setItem("minValue", String(value));
    }

    function setValues() {
        dispatch(setSettingsMode(false));
    }

    function incDisplayValue() {
        const newValue = Number(displayValue) + 1;
        if (newValue <= maxValue) {
            dispatch(setDisplayValue(newValue));
        }
    }

    function resetDisplayValue() {
        dispatch(setDisplayValue(minValue));
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
                buttons={[btns.setBtn]} />
            <Counter
                error={error}
                settingsMode={settingsMode}
                displayValue={displayValue}
                maxValue={maxValue}
                buttons={[btns.incBtn, btns.resetBtn]}
            />

        </div>
    );
}

export default App;
