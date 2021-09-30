import {
    SIGN_UP,
    LOGIN,
} from '../actions/types';

const initialState = {
    token: null,
    isAuthenticated: false,
    data: null,
  };
  
  export default function auth(state = initialState, action) {
    switch (action.type) {
      case SIGN_UP:
        return {
          ...state,
          ...action.payload,
          token: action.payload.token,
          data: action.payload.data,
        };
        default:
          return state;
    }
  }
  