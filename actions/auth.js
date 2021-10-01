import axios from 'axios';
import {
  SIGN_UP,
  LOGIN,
} from './types';

// SIGNUP USER
export const signup = (data) => (dispatch) => {
  data["files"]=[]
  var form_data = new FormData();
  for ( var key in data ) {
      form_data.append(key, data[key]);
  }
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  }
  axios
    .post("/api/startup/signup/", form_data, config)
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
    .post("/api/startup/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
    })
}