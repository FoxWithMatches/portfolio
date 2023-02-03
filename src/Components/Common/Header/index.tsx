import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import register from '../../../assets/register.png';
import { useSelector } from 'react-redux';
import { UserSelectors } from 'Store';

export const Header = () => {
  const userName = useSelector(UserSelectors.getUserName);

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
          {userName ? (
              <Link to={routes.person} className={style.header_nav_link}>
                <span className={style.nameAuth}>{userName}</span>
              </Link>
          ) : (
            <Link to={routes.reg} className={style.header_nav_link}>
              <img src={register} alt="logo register" width="24px" />
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
};
