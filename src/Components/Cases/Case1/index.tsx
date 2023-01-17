import React from 'react';
import style from '../Case.module.scss';
import oda from '../../../assets/portfolio/oda.png';
import blackCup from '../../../assets/portfolio/blackCup.jpg';

export const Case1 = () => {
  return (
    <main className={style.case}>
      <img src={oda} alt="logo" className={style.case_image} />
      <div className={style.case_wrapper}>
        <ol>
          Цели
          <li>
            Разработать дизайн сайта для молодого экологичного бренда многоразовых складных
            стакаников. Сайт должен быть современным, минималистичным и “легким”.
          </li>
          <li>Отрисовать логотип.</li>
          <li>Отрисовать серию иллюстраций для сайта и социальных сетей.</li>
          <li>
            Создать сайт - landing page - информационный, без возможности офорлмения покупки на
            сайте.
          </li>
          <li>Загрузить сайт на хостинг, без привязки к CMS системе.</li>
        </ol>
        <ol>
          Выполнено
          <li>Создан дизайн сайта в соответсвии с тех. заданием”. </li>
          <li>Отрисован логотип в двух вариантах. Применяются оба.</li>
          <li>Отрисована серия иллюстраций для сайта и социальных сетей.</li>
          <li>Разработан сайт с исользованием HTML, CSS, PHP, JQuery, MySQL.</li>
          <li>Оформлен домен и сайт загружен на хостинг, подключен SSL сертификат.</li>
        </ol>
      </div>
      <div className={style.case_nav}>
        <ul>
          Ссылки
          <li>
            <a href="https://oda-culture.store/" target="_blank" rel="noopener noreferrer" className={style.case_nav_link}>
              Посмотреть сайт
            </a>
          </li>
          <li>
            <a
              href="https://github.com/FoxWithMatches/ODA-culture"
              target="_blank"
              rel="noopener noreferrer" className={style.case_nav_link}
            >
              Посмотреть код на GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/gallery/151551231/ODA-culture-Landing-Page"
              target="_blank"
              rel="noopener noreferrer" className={style.case_nav_link}
            >
              Посмотреть дизайн на Behance
            </a>
          </li>
        </ul>
        <img src={blackCup} alt="black cup" />
      </div>
    </main>
  );
};
