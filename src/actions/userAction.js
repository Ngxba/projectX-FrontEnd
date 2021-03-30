import axios from "axios";
import { backEndLink } from "../config";

export const login = async (email, password) => {
  const res = await axios.post(`${backEndLink}/api/auth/login`, {
    email,
    password,
  });
  if (res.status === 200) {
    return res.data;
  }
  throw new Error("Cannot Sign In", res);
};

export const register = async (name, email, password) => {
  const res = await axios.post(`${backEndLink}/api/auth/register`, {
    name,
    email,
    password,
  });
  if (res.status === 200) {
    return res.data;
  }
  throw new Error("Cannot Sign Up", res);
};

export const updateData = async (name, email) => {
  const res = await axios.post(`${backEndLink}/api/user/update`, {
    name,
    email,
  });
  if (res.status === 200) {
    return res.data;
  }
  throw new Error("Cannot Update", res);
};
