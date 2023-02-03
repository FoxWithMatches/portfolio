import { Reg } from 'Components/Reg';
import { routes } from 'Helpers/Constants/routes';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserSelectors, UserSliceActions } from 'Store';
import style from './RegPage.module.scss'

export const RegPage = () => {
  const loading = useSelector(UserSelectors.getUserLoading);
  const token = useSelector(UserSelectors.getUserToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && token !== 'error') {
      navigate(routes.person);
      dispatch(UserSliceActions.setUserLoading(false));
    }
    if (token === 'error') {
      dispatch(UserSliceActions.setUserLoading(false));
    }
  }, [token]);
  return <>{loading ? <h1 className={style.wrapper}>Loading...</h1> : <Reg />}</>;
};
