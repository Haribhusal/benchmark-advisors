import axios from "axios";
axios.defaults.baseURL = "https://benchmark.promotingnepal.com/api/";

// if (sessionStorage.getItem("Token")) {
//   axios.defaults.headers.common["Authorization"] =
//     sessionStorage.getItem("Token");
// }
export const setLocal = (Token) => {
  axios.defaults.headers.common["Authorization"] = Token;
};
const Login = (data) => {
  return axios.post(`v2/authenticate`, data);
};

const Signup = (data) => {
  console.log("signupdata", data);
  return axios.post(`startup/signup`, data);
};

export { Login, Signup };

export { axios };
