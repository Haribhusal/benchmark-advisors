import axios from 'axios';
// axios.defaults.baseURL = "https://benchmark.promotingnepal.com/api/";
axios.defaults.baseURL =
    "https://admin.bmanepal.com/api/document-category/api'/";

// if (sessionStorage.getItem("Token")) {
//   axios.defaults.headers.common["Authorization"] =
//     sessionStorage.getItem("Token");
// }
export const setLocal = (Token) => {
    axios.defaults.headers.common['Authorization'] = Token;
};
const Login = (data) => {
    return axios.post(`v2/authenticate`, data);
};

const Signup = (data) => {
    return axios
        .post(`startup/signup`, data)
        .then((res) => {})
        .catch((err) => {
            console.log('error form ', err);
        });
};

export { Login, Signup };

export { axios };
