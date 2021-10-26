import axios from 'axios';
import {
    INVESTOR_SIGNUP,
    INVESTOR_SIGNUP_FAIL,
    INVESTOR_SIGNUP_SUCCESS,
    LOGIN,
} from './types';

// SIGNUP USER
export const signUpInvestor = (data) => (dispatch) => {
    dispatch({
        type: INVESTOR_SIGNUP,
    });

    var form_data = new FormData();
    for (var key in data) {
        form_data.append(key, data[key]);
    }

    axios
        .post('/api/investor/signup/', form_data)
        .then((res) => {
            dispatch({
                type: INVESTOR_SIGNUP_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: INVESTOR_SIGNUP_FAIL,
                payload: err.response.data,
            });
        });
};

// LOGIN INVESTOR
export const investorLogin = (data) => (dispatch) => {
    var form_data = new FormData();
    for (var key in data) {
        form_data.append(key, data[key]);
    }
    axios.post('/api/investor/login', form_data).then((res) => {
        dispatch({
            type: LOGIN,
            payload: res.data,
        });
    });
};
