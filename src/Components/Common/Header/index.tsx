import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import register from '../../../assets/register.png'

export const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <Link to={routes.main} className={style.header_logo}>
          <p>
            TS-family.<span>RU</span>
          </p>
        </Link>
      </div>
      <ul className={style.header_nav}>
        <li>
          <Link to={routes.main} className={style.header_nav_link}>
            Главная
          </Link>
        </li>
        <li>
          <Link to={routes.portfolio} className={style.header_nav_link}>
            Портофлио
          </Link>
        </li>
        <li>
          <Link to={routes.contacts} className={style.header_nav_link}>
            Контакты
          </Link>
        </li>
        <li>
          <Link to={routes.reg} className={style.header_nav_link}>
            <img src={register} alt="logo register" width='24px'/>
          </Link>
        </li>
      </ul>
    </header>
  );
};
