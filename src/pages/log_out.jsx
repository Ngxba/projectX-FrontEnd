/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { UserLogOut } from '../redux/actions/userActions';

const LogOut = () =>
{
  const dispatch = useDispatch();
  dispatch(UserLogOut());

  return (
    <Redirect exact from="/logout" to="/" />
  );
};

export default LogOut;
