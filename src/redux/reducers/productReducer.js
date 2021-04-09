const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
const FETCH_PRODUCTS_REQUEST_SUCCESS = "FETCH_PRODUCTS_REQUEST_SUCCESS";
const FETCH_PRODUCTS_REQUEST_FAILURE = "FETCH_PRODUCTS_REQUEST_FAILURE";

const initialState = {
  loading: false,
  productsData: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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

export default reducer;
