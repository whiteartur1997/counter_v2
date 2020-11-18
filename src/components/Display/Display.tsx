import React from 'react';
import s from './Display.module.css';

type DisplayType = {
  displayValue?: number
  maxValue?: number
  minValue?: number
  
}

export const Display = (props: DisplayType) => {
  return (
    <div className={s.display}>
      <span className={s.digit}>
        {props.displayValue}
      </span>
    </div>
  )
}