import { Footer } from 'Components/Common/Footer';
import React from 'react';

import style from './ModalContent.module.scss';

export const ModalContent = () => {
  return (
    <div className={style.container}>
      <h1 className={style.modal_title}>Свяжитесь со мной любым удобным способом</h1>
      <Footer />
    </div>
  );
};
