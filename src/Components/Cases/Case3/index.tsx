import React from 'react';
import style from '../Case.module.scss';
import { apkb } from '../../../Helpers/DataBase/db';

export const Case3 = () => {
  return (
    <main className={style.case}>
      <img src={apkb.logo} alt="logo" className={style.case_image} />
      <h3 className={style.case_title}>{apkb.description}</h3>
      <div className={style.case_wrapper}>
        <ol>
          Цели
          {apkb.goals.map((goal, key: number) => (
            <li key={key}>{goal}</li>
          ))}
        </ol>
        <ol>
          Выполнено
          {apkb.done.map((item, key: number) => (
            <li key={key}>{item}</li>
          ))}
        </ol>
      </div>
      <div className={style.case_nav}>
        <ul>
          Ссылки
          {apkb.links.map((link, key: number) => (
            <li key={key}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={style.case_nav_link}
              >
                Посмотреть код на GitHub
              </a>
            </li>
          ))}
        </ul>
        <img src={apkb.logo} alt="logo" />
      </div>
    </main>
  );
};
