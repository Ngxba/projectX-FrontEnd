/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
import axios from "axios";
import { backEndLink } from "../../config";
import {
  FETCH_HOME_DETAIL_REQUEST,
  FETCH_HOME_DETAIL_REQUEST_SUCCESS,
  FETCH_HOME_DETAIL_REQUEST_FAILURE,
} from "../types/homeType";

const FetchProductsRequest = () => ({
  type: FETCH_HOME_DETAIL_REQUEST,
});

const FetchProductsRequestSuccess = (products) => ({
  type: FETCH_HOME_DETAIL_REQUEST_SUCCESS,
  payload: products,
});

const FetchProductsRequestFailure = (error) => ({
  type: FETCH_HOME_DETAIL_REQUEST_FAILURE,
  payload: error,
});

export const FetchProducts = () =>
{
  return async function (dispatch)
  {
    dispatch(FetchProductsRequest());
    try
    {
      const resMostPopular = await axios.get(`${backEndLink}/api/product/browse?limit=4&sort=most-popular`);
      const resTrending = await axios.get(`${backEndLink}/api/product/browse?limit=4&sort=trending`);
      const latestBuy = await axios.get(`${backEndLink}/api/product/browse?limit=4&tags=yeezy`);
      const latestProduct = await axios.get(`${backEndLink}/api/product/browse?limit=4&tags=jordan`);

      if (resMostPopular.status === 200 && resTrending.status === 200)
      {
        const respondData = {
          mostPopular: resMostPopular.data.result,
          trending: resTrending.data.result,
          latestBuy: latestBuy.data.result,
          latestProduct: latestProduct.data.result,
        };
        dispatch(FetchProductsRequestSuccess(respondData));
      }
      else
      {
        //   throw new Error("Cannot Sign In", res.data.error);
        dispatch(FetchProductsRequestFailure(resMostPopular));
      }
    }
    catch (error)
    {
      dispatch(FetchProductsRequestFailure(error));
    }
  };
};

export const randomThings = "abc";

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
