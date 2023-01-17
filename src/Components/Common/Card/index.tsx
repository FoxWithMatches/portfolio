import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.scss';

type CardTypeProps = {
  title: string;
  section: string;
  image: string;
  link: string;
};

export const Card = (props: CardTypeProps) => {
  const { title, section, image, link } = props;
  return (
    <div className={style.card}>
      <h4 className={style.card_section}>{section}</h4>
      <h2 className={style.card_title}>{title}</h2>
      <img src={image} alt="image" className={style.card_image} />

      <Link to={link} className={style.card_link}>
        Подробнее &#8594;
      </Link>
    </div>
  );
};
