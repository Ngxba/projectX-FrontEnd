/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
import axios from 'axios';
import { backEndLink } from '../../config';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_REQUEST_SUCCESS,
  FETCH_PRODUCTS_REQUEST_FAILURE,
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

export const FetchProducts = () =>
{
  return async function (dispatch)
  {
    dispatch(FetchProductsRequest());
    try
    {
      const res = await axios.get(`${backEndLink}/api/product`);
      if (res.status === 200)
      {
        dispatch(FetchProductsRequestSuccess(res.data));
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

export const randomThings = 'abc';

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
