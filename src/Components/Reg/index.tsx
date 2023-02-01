import { Button } from 'Components/Common/Button';
import { Input } from 'Components/Common/Input';
import React, { ChangeEvent, useState, useEffect } from 'react';
import style from './Reg.module.scss';
import hide from '../../assets/hide.png'
import show from '../../assets/show.png'

export const Reg = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMesage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

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

    if (!validateEmail(formState.email)) {
      setErrorMesage('invalid email address');
      return;
    }
    console.log(formState, 'push on a server');
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
        <div className={style.wrapper_input_button}>
          <Input
            name={'Пароль'}
            value={formState.password}
            changeHandler={changeHandler('password')}
            type={showPassword ? 'text' : 'password'}
            required
          />
          <button
            className={style.eye}
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <img src={hide} alt="hide eye" /> : <img src={show} alt="show eye" />}
          </button>
        </div>

        {errorMessage !== '' && <div className={style.error}>{errorMessage}</div>}

        <Button title={'Зарегистироваться'} type={'submit'} />
      </div>
    </form>
  );
};
