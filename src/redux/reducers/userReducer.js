import { USER_REQUEST, USER_REQUEST_FAILURE, USER_REQUEST_SUCCESS } from '../types/userType';

const initialState = {
  loading: false,
  userData: {
    name: {
      firstName: '',
      lastName: '',
    },
    emai: '',
    _id: '',
  },
  error: '',
  isLogin: true,
};

const reducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
        isLogin: action.payload,
      };
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        userData: action.payload,
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
