import axios from 'axios';
import {
    SIGN_UP,
    LOGIN,
} from './types';

// SIGNUP USER
export const signup = (data) => (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
    };
    const body = JSON.stringify(data);
    axios
      .get("/api/document/list", config)
      .then((res) => {
        dispatch({
          type: SIGN_UP,
          payload: res.data,
        });
      })
  };