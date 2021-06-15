/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
import axios from 'axios';
import { deleteFromStorage, writeStorage } from '@rehooks/local-storage';
import { backEndLink } from '../../config';
import {
  USER_REQUEST_FAILURE,
  USER_REQUEST_LOGIN,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_UPDATE,
} from '../types/userType';

const UserRequestLogin = (isOnLoginTab) => ({
  type: USER_REQUEST_LOGIN,
  payload: isOnLoginTab,
});

const UserRequestUpdate = (updateSuccessfully) => ({
  type: USER_REQUEST_UPDATE,
  payload: updateSuccessfully,
});

const UserRequestSuccess = (data) => ({
  type: USER_REQUEST_SUCCESS,
  payload: data,
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
        // Exclude token from response data using ES9 Object Rest Operator
        const {
          token,
          ...dataWithoutToken
        } = res.data;

        axios.defaults.headers.common.Authorization = `Bearer ${token}`;

        const data = {
          userData: { ...dataWithoutToken },
          isLogin: true,
        };

        dispatch(UserRequestSuccess(data));

        writeStorage('token', res.data.token);
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

export const UpdateData = (passedData) =>
{
  return async function (dispatch)
  {
    const {
      name,
      email,
      id,
    } = passedData;

    dispatch(UserRequestUpdate(false));

    try
    {
      const res = await axios.post(`${backEndLink}/api/user/update/${id}`,
        {
          name,
          email,
        });

      if (res.status === 200)
      {
        const data = {
          userData: { ...passedData },
          updateSuccessfully: true,
        };

        dispatch(UserRequestSuccess(data));
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

export const ResetUpdateStatus = () =>
{
  return async (dispatch) =>
  {
    dispatch(UserRequestSuccess({ updateSuccessfully: false }));
  };
};

export const UserLogOut = () =>
{
  return async (dispatch) =>
  {
    const data = {
      userData: {
        name: {
          firstName: '',
          lastName: '',
        },
        email: '',
        id: '',
      },
      isLogin: false,
    };

    dispatch(UserRequestSuccess(data));

    deleteFromStorage('token');
  };
};

export const GetIdentity = (token) =>
{
  return async function (dispatch)
  {
    dispatch(UserRequestUpdate());
    try
    {
      const res = await axios.get(`${backEndLink}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200)
      {
        dispatch(UserRequestSuccess({
          userData: { ...res.data },
          isLogin: true,
        }));
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      }
      else
      {
        dispatch(UserRequestFailure(res.data.error));
        dispatch(UserLogOut());
      }
    }
    catch (error)
    {
      dispatch(UserRequestFailure(error));
    }
  };
};
