import { Card } from 'Components/Common/Card';
import React from 'react';
import style from './Portfolio.module.scss';
import oda from '../../assets/portfolio/oda.png';
import apkb from '../../assets/portfolio/apkb.png';
import notes from '../../assets/portfolio/notes.svg';
import { routes } from 'Helpers/Constants/routes';

export const PortfolioList = () => {
  return (
    <main className={style.wrapper}>
      <Card section="Разработка" title="ODA cultura" image={oda} link={routes.case1} />
      <Card section="Разработка" title="Notes" image={notes} link={routes.case2} />
      <Card section="Разработка" title="Notes" image={apkb} link={routes.case3} />
    </main>
  );
};
