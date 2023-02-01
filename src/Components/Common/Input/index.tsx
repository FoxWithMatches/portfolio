import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputProps = {
  name: string;
  value: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: true;
  placeholder?: string;
};

export const Input = ({ changeHandler, value, name, type = 'text', placeholder = '...' }: InputProps) => {
  return (
    <label className={style.input_wrapper}>
      <span>{name}</span>
      <input value={value} className={style.input} onChange={changeHandler} type={type} placeholder={placeholder} />
    </label>
  );
};
