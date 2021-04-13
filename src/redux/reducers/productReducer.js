import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_REQUEST_SUCCESS,
  FETCH_PRODUCTS_REQUEST_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_REQUEST_SUCCESS,
  FETCH_PRODUCT_REQUEST_FAILURE,
} from '../types/productType';

const initialProductsState = {
  loading: false,
  productsData: [],
  error: '',
};

export const productsReducer = (state = initialProductsState, action) =>
{
  switch (action.type)
  {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_REQUEST_SUCCESS:
      return {
        ...state,
        productsData: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_PRODUCTS_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        productsData: [],
      };
    default:
      return state;
  }
};

const initialProductState = {
  loading: false,
  productData: {},
  error: '',
};

export const productReducer = (state = initialProductState, action) =>
{
  switch (action.type)
  {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_REQUEST_SUCCESS:
      console.log("đ hiểu");
      return {
        ...state,
        productData: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_PRODUCT_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        productsData: {},
      };
    default:
      return state;
  }
};
