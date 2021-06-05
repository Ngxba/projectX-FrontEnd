import {
  ORDER_REQUEST_FETCH,
  ORDER_REQUEST_SUCCESS,
  ORDER_REQUEST_FAILURE,
} from "../types/orderType";

const initialState = {
  loading: false,
  orderData: [
    {
      ownerId: "",
      price: null,
      productId: "",
      productName: 'No data',
      purchaseDate: null,
      status: "",
      urlKey: "",
    },
  ],
};

const reducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case ORDER_REQUEST_FETCH:
      return {
        ...state,
        loading: true,
      };
    case ORDER_REQUEST_SUCCESS:
      return {
        ...state,
        orderData: action.payload,
        loading: false,
        error: "",
      };
    case ORDER_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        orderData: [
          {
            ownerId: "",
            price: null,
            productId: "",
            productName: "No data",
            purchaseDate: null,
            status: "",
            urlKey: "",
          },
        ],
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
