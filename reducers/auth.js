import {
    SIGN_UP,
    LOGIN,
} from '../actions/types';

const initialState = {
    token: null,
    isAuthenticated: false,
    message: null,
    data: null,
  };
  
  export default function auth(state = initialState, action) {
    switch (action.type) {
      case SIGN_UP:
        return {
          ...state,
          ...action.payload,
          message: action.payload?.message,
          data: action.payload?.data,
        };
        case LOGIN:
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            token: action.payload?.data?.access_token,
            message: action.payload?.message,
            data: action.payload?.data,
          }
        default:
          return state;
    }
  }
  