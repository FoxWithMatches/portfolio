import React, { ChangeEvent, useState } from 'react';
import { UserSelectors, UserSliceActions } from 'Store';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Reg/Reg.module.scss';
import stylePerson from './Person.module.scss';
import { Input } from 'Components/Common/Input';
import { Button } from 'Components/Common/Button';
import hide from '../../assets/hide.png';
import show from '../../assets/show.png';

export const Person = () => {
  const userName = useSelector(UserSelectors.getUserName);
  const userPhone = useSelector(UserSelectors.getUserPhone);
  const userEmail = useSelector(UserSelectors.getUserEmail);
  const userPassword = useSelector(UserSelectors.getUserPassword);

  const [formState, setFormState] = useState({
    name: userName,
    phone: userPhone,
    email: userEmail,
    password: userPassword,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMesage] = useState('');
  const dispatch = useDispatch();

  const validateEmail = (email: string) => {
    const emailRegex = /^[\w]{1}[\w-\\.]*@[\w-]+\.[a-z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
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
    } else if (!validateEmail(formState.email)) {
      setErrorMesage('invalid email address');
      formState.email = '';
    } else if (!validatePhone(formState.phone)) {
      setErrorMesage('invalid phone');
      formState.phone = '';
    } else {
      setErrorMesage('');
      dispatch(UserSliceActions.setUserLoading(true));

      setTimeout(
        () =>
          dispatch(
            UserSliceActions.setUserData({
              name: formState.name,
              email: formState.email,
              phone: formState.phone,
              password: formState.password,
              token: '123',
            }),
          ),
        2000,
      );

      console.log(formState, 'push on a server');
    }
  };

  const logOutHandler = () => {
    dispatch(UserSliceActions.clearUserData())
  }

  return (
    <main className={style.content}>
      <form onSubmit={submitHandler} className={style.wrapper}>
        <div className={style.wrapper_input}>
          <h1 className={style.title}>Личный кабинет</h1>
          <Input name={'Имя'} value={formState.name} changeHandler={changeHandler('name')} />
          <Input
            name={'Номер телефона'}
            value={formState.phone}
            changeHandler={changeHandler('phone')}
          />
          <Input name={'Email'} value={formState.email} changeHandler={changeHandler('email')} />
          <div className={style.wrapper_input_button}>
            <Input
              name={'Пароль'}
              value={formState.password}
              changeHandler={changeHandler('password')}
              type={showPassword ? 'text' : 'password'}
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

          <Button title={'Сохранить'} type={'submit'} />
          <button type='button' className={stylePerson.logout} onClick={logOutHandler}>Log Out</button>
        </div>
      </form>
    </main>
  );
};
