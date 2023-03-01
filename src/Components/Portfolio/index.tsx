import { Card } from 'Components/Common/Card';
import React from 'react';
import style from './Portfolio.module.scss';
// import oda from '../../assets/portfolio/oda.png';
import apkb from '../../assets/portfolio/apkb.png';
import notes from '../../assets/portfolio/notes.png';
import { routes } from 'Helpers/Constants/routes';
import { Outlet } from 'react-router-dom';
import { oda } from '../../Helpers/DataBase/db';

export const PortfolioList = () => {
  return (
    <main className={style.wrapper}>
      <Card section={oda.type} title="ODA cultura" image={oda.logo} link={routes.case1} />
      <Card section="Разработка" title="Notes" image={notes} link={routes.case2} />
      <Card section="Разработка" title="Notes" image={apkb} link={routes.case3} />
      <Outlet />
    </main>
  );
};
