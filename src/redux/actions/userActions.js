/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
import axios from 'axios';
import { writeStorage } from '@rehooks/local-storage';
import { backEndLink } from '../../config';
import {
  USER_REQUEST_LOGIN, USER_REQUEST_UPDATE, USER_REQUEST_FAILURE, USER_REQUEST_SUCCESS,
} from '../types/userType';

const UserRequestLogin = (isOnLoginTab) => ({
  type: USER_REQUEST_LOGIN,
  payload: isOnLoginTab,
});

const UserRequestUpdate = () => ({
  type: USER_REQUEST_UPDATE,
});

const UserRequestSuccess = (user) => ({
  type: USER_REQUEST_SUCCESS,
  payload: user,
});

const UserRequestFailure = (error) => ({
  type: USER_REQUEST_FAILURE,
  payload: error,
});

export const SignIn = (loginData) =>
{
  return async function (dispatch)
  {
    const {
      email,
      password,
    } = loginData;
    dispatch(UserRequestLogin(true));
    try
    {
      const res = await axios.post(`${backEndLink}/api/auth/login`, {
        email,
        password,
      });
      if (res.status === 200)
      {
        axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;

        dispatch(UserRequestSuccess(res.data));
        writeStorage('user_traits', res.data);
      }
      else
      {
        //   throw new Error("Cannot Sign In", res.data.error);
        dispatch(UserRequestFailure(res.data.error));
      }
    }
    catch (error)
    {
      dispatch(UserRequestFailure(error));
    }
  };
};

export const Register = (registerData) =>
{
  return async function (dispatch)
  {
    const {
      name,
      email,
      password,
    } = registerData;
    dispatch(UserRequestLogin(false));
    try
    {
      const res = await axios.post(`${backEndLink}/api/auth/register`, {
        name,
        email,
        password,
      });
      if (res.status === 200)
      {
        dispatch(UserRequestSuccess(res.data));
      }
      else
      {
        // throw new Error("Cannot Sign up", res);
        dispatch(UserRequestFailure(res.data.error));
      }
    }
    catch (error)
    {
      dispatch(UserRequestFailure(error));
    }
  };
};

export const getIdentity = (token) =>
{
  return async function (dispatch)
  {
    dispatch(UserRequestLogin(false));
    try
    {
      const res = await axios.get(`${backEndLink}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200)
      {
        dispatch(UserRequestSuccess(res.data));
      }
      else
      {
        // throw new Error("Cannot Sign up", res);
        dispatch(UserRequestFailure(res.data.error));
      }
    }
    catch (error)
    {
      dispatch(UserRequestFailure(error));
    }
  };
};

export const updateData = (data) =>
{
  return async function (dispatch)
  {
    const {
      name,
      email,
      id,
    } = data;

    dispatch(UserRequestUpdate());

    try
    {
      const res = await axios.post(`${backEndLink}/api/user/update/${id}`,
        {
          name,
          email,
        });

      if (res.status === 200)
      {
        dispatch(UserRequestSuccess(res.data));
      }
      else
      {
        dispatch(UserRequestFailure(res.data.error));
      }
    }
    catch (error)
    {
      dispatch(UserRequestFailure(error));
    }
  };
};
