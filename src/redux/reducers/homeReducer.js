import {
  FETCH_HOME_DETAIL_REQUEST,
  FETCH_HOME_DETAIL_REQUEST_SUCCESS,
  FETCH_HOME_DETAIL_REQUEST_FAILURE,
} from "../types/homeType";

const initialState = {
  loading: false,
  homeData: {},
  error: "",
};

const reducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case FETCH_HOME_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HOME_DETAIL_REQUEST_SUCCESS:
      return {
        ...state,
        homeData: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_HOME_DETAIL_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        homeData: {},
      };
    default:
      return state;
  }
};

export default reducer;
