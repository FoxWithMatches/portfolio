import React from 'react';
import vk from '../../../assets/vk.svg';
import behance from '../../../assets/behance.svg';
import inst from '../../../assets/inst.svg';
import github from '../../../assets/github.svg';
import telegram from '../../../assets/telegram.svg';
import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <a href="https://vk.com/alisadubkova" target="_blank" rel="noopener noreferrer">
        <img src={vk} alt="logo vk" />
      </a>
      <a href="https://vk.com/alisadubkova" target="_blank" rel="noopener noreferrer">
        <img src={inst} alt="logo inst" />
      </a>
      <a href="https://vk.com/alisadubkova" target="_blank" rel="noopener noreferrer">
        <img src={behance} alt="logo behance" />
      </a>
      <a href="https://vk.com/alisadubkova" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="logo github" />
      </a>
      <a href="https://vk.com/alisadubkova" target="_blank" rel="noopener noreferrer">
        <img src={telegram} alt="logo telegram" />
      </a>
    </footer>
  );
};
