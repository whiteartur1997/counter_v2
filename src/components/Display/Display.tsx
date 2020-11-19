import React, {ChangeEvent} from 'react';
import s from './Display.module.css';


type DisplayType = {
    error: boolean
    settingsMode: boolean
    displayValue?: number | string
    maxValue?: number
    minValue?: number
    changeMaxValue?: (value: number) => void
    changeMinValue?: (value: number) => void
}

export const Display = (props: DisplayType) => {
    const onChangeMaxCallback = (e: ChangeEvent<HTMLInputElement>) => {
        {
            props.changeMaxValue
            && props.changeMaxValue(+e.currentTarget.value);
        }
    }
    const onChangeMinCallback = (e: ChangeEvent<HTMLInputElement>) => {
        {
            props.changeMinValue
            && props.changeMinValue(+e.currentTarget.value);
        }
    }
    return (
        <div className={s.display}>
            {typeof props.displayValue != "undefined" ? (
                props.settingsMode ? (
                    <span className={`${s.message} ${props.error ? s.error : ""}`}>
                        {props.error ? "invalid values!" : "enter values and press set"}
                        </span>
                ) : (
                    <span className={`${s.digit} ${props.displayValue === props.maxValue ? s.max : ""}`}>
                            {props.displayValue}
                        </span>
                )
            ) : (
                <>
                    <div className={s.indicator}>
                        <span className={s.label}>max value</span>
                        <input
                            className={`${s.input} ${props.error ? s.inputError : ""}`}
                            type="number"
                            value={props.maxValue}
                            onChange={onChangeMaxCallback}/>
                    </div>
                    <div className={s.indicator}>
                        <span className={s.label}>min value</span>
                        <input
                            className={`${s.input} ${props.error ? s.inputError : ""}`}
                            type="number"
                            value={props.minValue}
                            onChange={onChangeMinCallback}/>
                    </div>
                </>
            )
            }
        </div>
    )
}
