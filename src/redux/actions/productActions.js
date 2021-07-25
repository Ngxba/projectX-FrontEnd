/* eslint-disable arrow-body-style */
/* eslint-disable */
import axios from "axios";
import { backEndLink } from "../../config";
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_REQUEST_FAILURE,
  FETCH_PRODUCT_REQUEST_SUCCESS,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_REQUEST_FAILURE,
  FETCH_PRODUCTS_REQUEST_SUCCESS,
  UPDATE_PRODUCT_DATA
} from "../types/productType";
import {
  objectToQueryString,
} from "../../utils/supportFunction";

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

export const FetchProducts = (offset = null, limit = null, params) => {
  return async function (dispatch) {
    dispatch(FetchProductsRequest());
    const { category, tag, tag2, tag3, tag4, tag5 } = params;

    const tagQuery = [tag, tag2, tag3, tag4, tag5].reduce(
      (pre, cur, index) =>
        cur != null ? (pre += index != 0 ? `,${cur}` : `${cur}`) : pre,
      tag != null ? "&tags=" : ""
    );

    try {
      const res = await axios.get(
        `${backEndLink}/api/product/browse?offset=${offset}&limit=${limit}&productCategory=${category}${tagQuery}`
      );

      if (res.status === 200) {
        dispatch(FetchProductsRequestSuccess(res.data.result));
        let listBrand = [];

        for (let i = 0; i < res.data.result.length; i++) {
          if (!listBrand.includes(res.data.result[i].brand)) {
            listBrand.push(res.data.result[i].brand);
          }
        }
      } else {
        //   throw new Error("Cannot Sign In", res.data.error);
        dispatch(FetchProductsRequestFailure(res));
      }
    } catch (error) {
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

const ChangeProductData = (payload) => ({
  type: UPDATE_PRODUCT_DATA,
  payload: payload,
});

export const FetchFilteredProduct = (obj) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${backEndLink}/api/product/browse?${objectToQueryString(obj)}`);
      if (res.status === 200) {
        dispatch(ChangeProductData(res.data.result))
      } else {
        // error
        dispatch(ChangeProductData([]))
      }
    } catch (error) {
      // error
      dispatch(ChangeProductData([]))
    }
  }
};

export const FetchProduct = (urlKey) => {
  return async function (dispatch) {
    dispatch(FetchProductRequest());
    try {
      const res = await axios.get(`${backEndLink}/api/product/${urlKey}`);
      if (res.status === 200) {
        dispatch(FetchProductRequestSuccess(res.data.product));
        console.log(res.data.product)
      } else {
        //   throw new Error("Cannot Sign In", res.data.error);
        dispatch(FetchProductsRequestFailure(res));
      }
    } catch (error) {
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
