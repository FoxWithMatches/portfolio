import { Button } from 'Components/Common/Button';
import React from 'react';
import style from './Content.module.scss';

export const Content = () => {
  return (
    <main className={style.content}>
      <div className={style.content_container}>
        <h2 className={style.content_title}>Привет! Меня зовут Алиса</h2>
        <p>Я Front-end разработчик, UX / UI дизайнер и студент.</p>
        <Button title="Обсудить проект" />
      </div>
    </main>
  );
};
