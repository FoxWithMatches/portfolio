import { Button } from 'Components/Common/Button';
import { Modal } from 'Components/Modal';
import { useModal } from '../../../Helpers/CustomHook/useModal';
import React from 'react';
import style from './Content.module.scss';
import { ModalContent } from 'Components/ModalContent';

export const Content = () => {
  const { isOpen, toggle } = useModal();

  return (
    <main className={style.content}>
      <div className={style.content_container}>
        <h2 className={style.content_title}>Привет! Меня зовут Алиса</h2>
        <p>Я Front-end разработчик, UX / UI дизайнер и студент.</p>
        <Button onClick={toggle} title="Обсудить проект" />
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalContent />
        </Modal>
      </div>
    </main>
  );
};
