/* eslint-disable arrow-body-style */
/* eslint-disable */
import axios from 'axios';
import { backEndLink } from '../../config';
import {
  FETCH_RELATED_PRODUCTS_REQUEST,
  FETCH_RELATED_PRODUCTS_REQUEST_FAILURE,
  FETCH_RELATED_PRODUCTS_REQUEST_SUCCESS
} from '../types/productType';

const FetchRelatedProductsRequest = () => ({
  type: FETCH_RELATED_PRODUCTS_REQUEST
});

const FetchRelatedProductsRequestSuccess = (products) => ({
  type: FETCH_RELATED_PRODUCTS_REQUEST_SUCCESS,
  payload: products
});

const FetchRelatedProductsRequestFailure = (error) => ({
  type: FETCH_RELATED_PRODUCTS_REQUEST_FAILURE,
  payload: error
});

const FetchRelatedProducts = (offset = null, limit = null, data) =>
{
  return async function (dispatch)
  {
    dispatch(FetchRelatedProductsRequest());
    const {
      category,
      tag,
      tag2,
      tag3,
      tag4,
      tag5
    } = data;
    const tagQuery = [tag, tag2, tag3, tag4, tag5].reduce(
      (pre, cur, index) => (cur != null ? (pre += (index != 0 ? `,${cur}` : `${cur}`)) : pre),
      tag != null ? '&tags=' : ''
    );
    try
    {
      const res = await axios.get(`${backEndLink}/api/product/browse?offset=${offset}&limit=${limit}&productCategory=${category}${tagQuery}`);
      if (res.status === 200)
      {
        dispatch(FetchRelatedProductsRequestSuccess(res.data.result));
      }
      else
      {
        //   throw new Error("Cannot Sign In", res.data.error);
        dispatch(FetchRelatedProductsRequestFailure(res));
      }
    }
    catch (error)
    {
      dispatch(FetchRelatedProductsRequestFailure(error));
    }
  };
};

export default FetchRelatedProducts;
