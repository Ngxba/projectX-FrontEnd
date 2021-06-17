import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_REQUEST_SUCCESS,
  FETCH_PRODUCTS_REQUEST_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_REQUEST_SUCCESS,
  FETCH_PRODUCT_REQUEST_FAILURE,
  UPDATE_PRODUCT_DATA,
} from "../types/productType";

const initialProductsState = {
  loading: false,
  productsData: [],
  error: "",
};

export const productsReducer = (state = initialProductsState, action) =>
{
  switch (action.type)
  {
    case UPDATE_PRODUCT_DATA:
      return {
        ...state,
        productsData: action.payload,
      };
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
        error: "",
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
  productData: {
    tags: [],
    _id: "",
    productName: "",
    price: 0,
    imageurl: "",
    tickerSymbol: "",
    detail: [
      {
        _id: "",
        name: "",
        value: "",
      },
    ],
    description: "",
    sizeQuantity: [{ _id: "", size: "", quantity: 0 }],
    dateUpdated: "",
  },
  error: "",
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
    case FETCH_PRODUCT_REQUEST_SUCCESS: {
      return {
        ...state,
        productData: action.payload,
        loading: false,
        error: "",
      };
    }
    case FETCH_PRODUCT_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        productsData: {
          tags: [],
          _id: "",
          productName: "",
          price: 0,
          imageurl: "",
          tickerSymbol: "",
          detail: [
            {
              _id: "",
              name: "",
              value: "",
            },
          ],
          description: "",
          sizeQuantity: [{ _id: "", size: "", quantity: 0 }],
          dateUpdated: "",
        },
      };
    default:
      return state;
  }
};
