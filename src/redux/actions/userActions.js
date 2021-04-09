/* eslint-disable arrow-body-style */
import axios from "axios";
import { backEndLink } from "../../config";

const USER_REQUEST = "USER_REQUEST";
const USER_REQUEST_SUCCESS = "USER_REQUEST_SUCCESS";
const USER_REQUEST_FAILURE = "USER_REQUEST_FAILURE";

const UserRequest = (isLogin) => ({
  type: USER_REQUEST,
  payload: isLogin,
});

const UserRequestSuccess = (user) => ({
  type: USER_REQUEST_SUCCESS,
  payload: user,
});

const UserRequestFailure = (error) => ({
  type: USER_REQUEST_FAILURE,
  payload: error,
});

export const SignIn = (loginData) => {
  return async function login(dispatch) {
    const { email, password } = loginData;
    dispatch(UserRequest(true));
    try {
      const res = await axios.post(`${backEndLink}/api/auth/login`, {
        email,
        password,
      });
      if (res.status === 200) {
        dispatch(UserRequestSuccess(res.data));
      } else {
        //   throw new Error("Cannot Sign In", res.data.error);
        dispatch(UserRequestFailure(res.data.error));
      }
    } catch (error) {
      dispatch(UserRequestFailure(error));
    }
  };
};

export const Register = (registerData) => {
  return async function register(dispatch) {
    const { name, email, password } = registerData;
    dispatch(UserRequest(false));
    try {
      const res = await axios.post(`${backEndLink}/api/auth/register`, {
        name,
        email,
        password,
      });
      if (res.status === 200) {
        dispatch(UserRequestSuccess(res.data));
      } else {
        // throw new Error("Cannot Sign up", res);
        dispatch(UserRequestFailure(res.data.error));
      }
    } catch (error) {
      dispatch(UserRequestFailure(error));
    }
  };
};

// export const updateData = async (name, email) => {
//   const res = await axios.post(`${backEndLink}/api/user/update`, {
//     name,
//     email,
//   });
//   if (res.status === 200) {
//     return res.data;
//   }
//   throw new Error("Cannot Update", res);
// };