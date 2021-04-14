/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
import axios from 'axios';
import { backEndLink } from '../../config';
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_REQUEST_FAILURE,
  FETCH_PRODUCT_REQUEST_SUCCESS,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_REQUEST_FAILURE,
  FETCH_PRODUCTS_REQUEST_SUCCESS,
} from '../types/productType';

const FetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

const FetchProductsRequestSuccess = (products) => ({
  type: FETCH_PRODUCTS_REQUEST_SUCCESS,
  payload: products,
});

const FetchProductsRequestFailure = (error) => ({
  type: FETCH_PRODUCTS_REQUEST_FAILURE,
  payload: error,
});

export const FetchProducts = (offset = null, limit = null, params) =>
{
  return async function (dispatch)
  {
    dispatch(FetchProductsRequest());
    const {
      category,
      tag,
      tag2,
      tag3,
      tag4,
      tag5,
    } = params;

    try
    {
      const res = await axios.get(`${backEndLink}/api/product/browse?offset=${offset}&limit=${limit}&productCategory=${category}&tags=${tag},${tag2},${tag3},${tag4},${tag5}`);
      if (res.status === 200)
      {
        dispatch(FetchProductsRequestSuccess(res.data.result));
      }
      else
      {
        //   throw new Error("Cannot Sign In", res.data.error);
        dispatch(FetchProductsRequestFailure(res));
      }
    }
    catch (error)
    {
      dispatch(FetchProductsRequestFailure(error));
    }
  };
};

const FetchProductRequest = () => ({
  type: FETCH_PRODUCT_REQUEST,
});

const FetchProductRequestSuccess = (products) => ({
  type: FETCH_PRODUCT_REQUEST_SUCCESS,
  payload: products,
});

const FetchProductRequestFailure = (error) => ({
  type: FETCH_PRODUCT_REQUEST_FAILURE,
  payload: error,
});

export const FetchProduct = (urlKey) =>
{
  return async function (dispatch)
  {
    dispatch(FetchProductRequest());
    try
    {
      const res = await axios.get(`${backEndLink}/api/product/${urlKey}`);
      if (res.status === 200)
      {
        dispatch(FetchProductRequestSuccess(res.data.product));
      }
      else
      {
        //   throw new Error("Cannot Sign In", res.data.error);
        dispatch(FetchProductsRequestFailure(res));
      }
    }
    catch (error)
    {
      dispatch(FetchProductRequestFailure(error));
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
