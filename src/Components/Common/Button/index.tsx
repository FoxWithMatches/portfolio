import React from 'react';
import style from './Button.module.scss';

type ButtonProps = {
  title: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return <button className={style.button} onClick={onClick}>{title}</button>;
};
