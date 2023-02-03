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
  const { section, image, link } = props;
  return (
    <div className={style.card}>
      <Link to={link} className={style.card_link}>
        <h4 className={style.card_section}>{section}</h4>
        <img src={image} className={style.card_image} alt="image" />
        <div>Подробнее &#8594;</div>
      </Link>
    </div>
  );
};
