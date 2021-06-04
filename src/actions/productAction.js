import axios from "axios";
import { backEndLink } from "../config";

export const getAllProduct = async () =>
{
  const res = await axios.get(`${backEndLink}/api/product/`);
  if (res.status === 200)
  {
    return res.data;
  }
  throw new Error("Server error", res);
};

export const getProductData = async () =>
{
  const res = await axios.get(`${backEndLink}/api/product/`);
  if (res.status === 200)
  {
    return res.data;
  }
  throw new Error("Server error", res);
};
