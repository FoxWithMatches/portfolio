import React from 'react';
import style from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <h1 className={style.contacts_title}>
        Вы можете связаться со мной любым удобным для вас способом
      </h1>
      <p className={style.contacts_arrow}>&darr;</p>
    </div>
  );
};
