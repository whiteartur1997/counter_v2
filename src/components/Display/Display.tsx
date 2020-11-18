import React from 'react';
import s from './Display.module.css';

type DisplayType = {
  displayValue: string
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