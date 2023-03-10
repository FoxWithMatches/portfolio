import { Button } from 'Components/Common/Button';
import { Input } from 'Components/Common/Input';
import React, { ChangeEvent, useState, useEffect } from 'react';
import style from './Reg.module.scss';
import hide from '../../assets/hide.png';
import show from '../../assets/show.png';
import { useDispatch } from 'react-redux';
import { UserSliceActions } from 'Store';

export const Reg = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMesage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const validateEmail = (email: string) => {
    const emailRegex = /^[\w]{1}[\w-\\.]*@[\w-]+\.[a-z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\d\\+][\d\\(\\)\\ -]{4,14}\d$/;
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
        <h1 className={style.title}>??????????????????????</h1>
        <Input
          name={'??????'}
          value={formState.name}
          changeHandler={changeHandler('name')}
          placeholder={'????????????????????'}
        />
        <Input
          name={'??????????????'}
          value={formState.phone}
          changeHandler={changeHandler('phone')}
          type={'tel'}
          placeholder={'+7 '}
        />
        <Input
          name={'E-mail'}
          value={formState.email}
          changeHandler={changeHandler('email')}
          placeholder={'konstantin@mail.ru'}
        />
        <div className={style.wrapper_input_button}>
          <Input
            name={'????????????'}
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

        <Button title={'??????????????????????????????????'} type={'submit'} />
      </div>
    </form>
  );
};
