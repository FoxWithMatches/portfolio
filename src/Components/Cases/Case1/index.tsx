import React from 'react';
import style from '../Case.module.scss';
import { oda } from '../../../Helpers/DataBase/db';

export const Case1 = () => {
  return (
    <main className={style.case}>
      <img src={oda.logo} alt="logo" className={style.case_image} />
      <div className={style.case_wrapper}>
        <ol>
          Цели
          {oda.goals.map((goal, key: number) => (
            <li key={key}>{goal}</li>
          ))}
        </ol>
        <ol>
          Выполнено
          {oda.done.map((item, key: number) => (
            <li key={key}>{item}</li>
          ))}
        </ol>
      </div>
      <div className={style.case_nav}>
        <ul>
          Ссылки
          {oda.links.map((link, key: number) => (
            <li key={key}>
              <a
                href={link}
                className={style.case_nav_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
            </li>
          ))}
        </ul>
        <img src={oda.image} alt="black cup" />
      </div>
    </main>
  );
};
