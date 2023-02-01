import React from 'react';
import style from '../Case.module.scss';
import notes from '../../../assets/portfolio/notes.png';

export const Case2 = () => {
  return (
    <main className={style.case}>
      <img src={notes} alt="logo" className={style.case_image} />
      <h3 className={style.case_title}>
        Учебный проект в рамках курса ННГУ им.Лобачевского продвинутый JavaScript. React & redux.
      </h3>
      <div className={style.case_wrapper}>
        <ol>
          Цели
          <li>Создать проект на свой выбор, используя React и TypeScript.</li>
        </ol>
        <ol>
          Выполнено
          <li>Тема проекта - Заметки.</li>
          <li>Реализован процесс добавления заметок и удаления с помощью UseState.</li>
          <li>Таким же образом реализован процесс добавления списков.</li>
          <li>{'//TODO --- отображение заметок из конкретного списка'}</li>
        </ol>
      </div>
      <div className={style.case_nav}>
        <ul>
          Ссылки
          <li>
            <a
              href="https://github.com/FoxWithMatches/ts_react_todo"
              target="_blank"
              rel="noopener noreferrer"
              className={style.case_nav_link}
            >
              Посмотреть код на GitHub
            </a>
          </li>
        </ul>
        <img src={notes} alt="logo" />
      </div>
    </main>
  );
};
