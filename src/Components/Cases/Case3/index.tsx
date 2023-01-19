import React from 'react';
import style from '../Case.module.scss';
import apkb from '../../../assets/portfolio/apkb.png';

export const Case3 = () => {
  return (
    <main className={style.case}>
      <img src={apkb} alt="logo" className={style.case_image} />
      <h3 className={style.case_title}>
        ООО “Арзамасское приборостроительное конструкторское бюро”
      </h3>
      <p className={style.case_subtitle}>современные разработки в интересах МО РФ и гражданского назначения</p>
      <div className={style.case_wrapper}>
        <ol>
          Цели
          <li>Сделать редизайн сайта.</li>
          <li>Перерисовать логотип в векторе</li>
          <li>Разработать сайт.</li>
          <li>Подобрать новый хостинг, выложить.</li>
        </ol>
        <ol>
          Выполнено
          <li>Сделан и согласован новый дизайн сайта на основе тех. задания.</li>
          <li>Сделан логотип в векторе.</li>
          <li>Создан сайт, с применением HTML, CSS, JQuery.</li>
          <li>{'//TODO --- настройках Backend'}</li>
          <li>{'//TODO --- выложить на хостинг'}</li>
        </ol>
      </div>
      <div className={style.case_nav}>
        <ul>
          Ссылки
          <li>
            <a
              href="https://github.com/FoxWithMatches/apkb"
              target="_blank"
              rel="noopener noreferrer"
              className={style.case_nav_link}
            >
              Посмотреть код на GitHub
            </a>
          </li>
        </ul>
        <img src={apkb} alt="logo" />
      </div>
    </main>
  );
};
