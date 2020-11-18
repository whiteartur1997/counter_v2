import React from 'react';
import s from './Button.module.css';

type ButtonType = {
  descr: string
  onClick: () => void
}

export const Button = (props: ButtonType) => {
  return <button 
    className={s.button}
    onClick={props.onClick}>
      {props.descr}
    </button>
}