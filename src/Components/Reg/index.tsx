import { Button } from 'Components/Common/Button';
import { Input } from 'Components/Common/Input';
import React, { ChangeEvent, useState, useEffect } from 'react';
import style from './Reg.module.scss';

export const Reg = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMesage] = useState('');

  const changeHandler =
    (fieldName: 'name' | 'phone' | 'email' | 'password') =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => {
        const newData = { ...prev };
        newData[fieldName] = event.target.value;
        return newData;
      });
    };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState.password.length < 5) {
      setErrorMesage('password is short');
    } else {
      setErrorMesage('');
      console.log(formState, 'push on a server');
    }
  };

  useEffect(() => {
    if (formState.password.length < 5 && formState.password !== '') {
      setErrorMesage('password is short');
    } else {
      setErrorMesage('');
    }
  }, [formState.password]);

  return (
    <form onSubmit={submitHandler} className={style.wrapper}>
      <div className={style.wrapper_input}>
        <h1 className={style.title}>Регистрация</h1>
        <Input
          name={'Имя'}
          value={formState.name}
          changeHandler={changeHandler('name')}
          placeholder={'Константин'}
        />
        <Input
          name={'Телефон'}
          value={formState.phone}
          changeHandler={changeHandler('phone')}
          type={'tel'}
          placeholder={'+7 999 99 99 99'}
        />
        <Input
          name={'E-mail'}
          value={formState.email}
          changeHandler={changeHandler('email')}
          placeholder={'konstantin@mail.ru'}
        />
        <Input
          name={'Пароль'}
          value={formState.password}
          changeHandler={changeHandler('password')}
          type={'password'}
          required
        />

        {errorMessage !== '' && <div className={style.error}>{errorMessage}</div>}

        <Button title={'Зарегистироваться'} type={'submit'} />
      </div>
    </form>
  );
};
