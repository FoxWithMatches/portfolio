import React from 'react';
import style from './Button.module.scss'

type ButtonProps = {
  title: string;
};

export const Button = (props: ButtonProps) => {
  const { title } = props;
  return <button className={style.button}>{title}</button>;
};
