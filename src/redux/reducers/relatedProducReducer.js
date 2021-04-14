import {
  FETCH_RELATED_PRODUCTS_REQUEST,
  FETCH_RELATED_PRODUCTS_REQUEST_FAILURE,
  FETCH_RELATED_PRODUCTS_REQUEST_SUCCESS,
} from '../types/productType';

const initialRelatedProductState = {
  loading: false,
  productsData: [],
  error: '',
};

const reducer = (state = initialRelatedProductState, action) =>
{
  switch (action.type)
  {
    case FETCH_RELATED_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RELATED_PRODUCTS_REQUEST_SUCCESS:
      return {
        ...state,
        productsData: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_RELATED_PRODUCTS_REQUEST_FAILURE:
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

export default reducer;
