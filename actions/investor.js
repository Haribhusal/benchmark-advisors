import axios from 'axios';
import {
    INVESTOR_SIGNUP,
    INVESTOR_SIGNUP_FAIL,
    INVESTOR_SIGNUP_SUCCESS,
    LOGIN,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    PROFILE_UPDATE,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_FAIL,
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
    dispatch({ type: LOGIN });
    var form_data = new FormData();
    for (var key in data) {
        form_data.append(key, data[key]);
    }
    axios
        .post('/api/investor/login', form_data)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data,
            });
        });
};

// Update Startup PROFILE
export const updateInvestorProfile = (data) => (dispatch) => {
    dispatch({ type: PROFILE_UPDATE });
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Brearer ${token}`,
        },
    };

    axios
        .post('/api/investor/update-profile', data, config)
        .then((res) => {
            dispatch({
                type: PROFILE_UPDATE_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: PROFILE_UPDATE_FAIL,
                payload: err.response.data,
            });
        });
};
