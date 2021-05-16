import {
  USER_REQUEST_LOGIN,
  USER_REQUEST_FAILURE,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_UPDATE,
} from '../types/userType';

const initialState = {
  loading: false,
  userData: {
    name: {
      firstName: '',
      lastName: '',
    },
    email: '',
    id: '',
  },
  isLogin: false,
  updateSuccessfully: false,
  error: '',
  isOnLoginTab: true,
};

const reducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case USER_REQUEST_LOGIN:
      return {
        ...state,
        loading: true,
        isOnLoginTab: action.payload,
      };
    case USER_REQUEST_UPDATE:
      return {
        ...state,
        loading: true,
      };
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: '',
      };
    case USER_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        userData: {},
      };
    default:
      return state;
  }
};

export default reducer;
