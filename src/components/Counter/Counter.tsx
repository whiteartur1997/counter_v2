import React from 'react';
import s from './Counter.module.css';
import {Display} from "../Display/Display";
import {Button} from "../Button/Button";
import {BtnType} from "../../App";

type CounterType = {
    error: boolean
    settingsMode: boolean
    displayValue?: number | string
    maxValue?: number
    minValue?: number
    changeMaxValue?: (value: number) => void
    changeMinValue?: (value: number) => void
    buttons: BtnType[]
}

export const Counter:React.FC<CounterType> = (
    {
        settingsMode, error,
        displayValue, maxValue,
        minValue , changeMinValue,
        changeMaxValue, buttons
    }
    ) => {

  return(
      <div className={s.counter}>
        <Display
            error={error}
            settingsMode={settingsMode}
            displayValue={displayValue}
            maxValue={maxValue}
            minValue={minValue}
            changeMaxValue={changeMaxValue}
            changeMinValue={changeMinValue}/>
        <div className={s.buttons}>

            {buttons.map((b, index) => {
                return(
                    <Button
                        error={error}
                        key={index}
                        descr={b.descr}
                        onClickHandler={b.callback}
                        disabled={b.disabled} />
                )
            })}
        </div>
      </div>
  )
}