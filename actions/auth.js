import axios from 'axios';
import {
  SIGN_UP,
  LOGIN,
  PROFILE,
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
  var form_data = new FormData();
  for ( var key in data ) {
      form_data.append(key, data[key]);
  }
  axios
    .post("/api/startup/login", form_data)
    .then((res) => {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
    })
}

// GET USER PROFILE
export const getProfile = () => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Brearer ${token}`,
    },
  };
  try {
  axios
    .get("/api/startup/profile", config)
    .then((res) => {
      dispatch({
        type: PROFILE,
        payload: res.data,
      });
    })
  } catch (error) {
    console.log(error);
  }
}