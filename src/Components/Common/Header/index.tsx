import React from 'react';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <p className={style.header_logo}>
          TS-family.<span>RU</span>
        </p>
      </div>
      <ul className={style.header_nav}>
        <li className={style.header_nav_link}>Главная</li>
        <li className={style.header_nav_link}>Портофлио</li>
        <li className={style.header_nav_link}>Контакты</li>
      </ul>
    </header>
  );
};
