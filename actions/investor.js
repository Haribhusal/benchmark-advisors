import axios from "axios";
import { INVESTOR_SIGNUP } from "./types";

// SIGNUP USER
export const signUpInvestor = (data) => (dispatch) => {
  var form_data = new FormData();
  for (var key in data) {
    form_data.append(key, data[key]);
  }

  axios.post("/api/startup/signup/", form_data).then((res) => {
    dispatch({
      type: INVESTOR_SIGNUP,
      payload: res.data,
    });
  });
};
