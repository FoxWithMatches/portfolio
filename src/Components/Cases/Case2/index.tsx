import React from 'react';
import style from '../Case.module.scss';
import { notes } from '../../../Helpers/DataBase/db';

export const Case2 = () => {
  return (
    <main className={style.case}>
      <img src={notes.logo} alt="logo" className={style.case_image} />
      <h3 className={style.case_title}>{notes.description}</h3>
      <div className={style.case_wrapper}>
        <ol>
          Цели
          {notes.goals.map((note, key: number) => (
            <li key={key}>{note}</li>
          ))}
        </ol>
        <ol>
          Выполнено
          {notes.done.map((item, key: number) => (
            <li key={key}>{item}</li>
          ))}
        </ol>
      </div>
      <div className={style.case_nav}>
        <ul>
          Ссылки
          {notes.links.map((link, key: number) => (
            <li key={key}>
              <a href={link} target="_blank" rel="noopener noreferrer" className={style.case_nav_link}>
                Посмотреть код на GitHub
              </a>
            </li>
          ))}
        </ul>
        <img src={notes.logo} alt="logo" />
      </div>
    </main>
  );
};
