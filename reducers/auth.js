import {
    SIGN_UP,
    LOGIN,
    PROFILE,
} from '../actions/types';

const initialState = {
    isLoading: true,
    token: null,
    isAuthenticated: false,
    message: null,
    user: null,
    signupsuccess: null
  };
  
  export default function auth(state = initialState, action) {
    switch (action.type) {
      case SIGN_UP:
        return {
          ...state,
          ...action.payload,
          message: action.payload?.message,
          user: action.payload?.data,
          isLoading: false,
          signupsuccess: true,
        };
        case LOGIN:
          localStorage.setItem('token', action.payload?.data?.access_token);
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            token: action.payload?.data?.access_token,
            message: action.payload?.message,
            user: action.payload?.data,
          }
        case PROFILE:
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            user: action.payload?.data,
          }
        default:
          return state;
    }
  }
  