import React from 'react';
import s from './Button.module.css';

type ButtonType = {
  descr: string
  disabled: boolean
  onClickHandler: () => void
  error: boolean
}

export const Button = (props: ButtonType) => {

  const onClickHandler = () => {
    props.onClickHandler();
  }

  return <button
    disabled={props.error || props.disabled}
    className={s.button}
    onClick={onClickHandler}>
      {props.descr}
    </button>
}