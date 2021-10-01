import axios from 'axios';
import {
    SIGN_UP,
    LOGIN,
} from './types';

// SIGNUP USER
export const signup = (data) => (dispatch) => {
    const body = JSON.stringify(data);
    axios
      .get("/api/startup/signup", config)
      .then((res) => {
        dispatch({
          type: SIGN_UP,
          payload: res.data,
        });
      })
  };

// LOGIN USER
export const login = (data) => (dispatch) => {
    const body = JSON.stringify(data);
    axios
      .get("/api/startup/login", config)
      .then((res) => {
        dispatch({
          type: LOGIN,
          payload: res.data,
        });
      })
  }