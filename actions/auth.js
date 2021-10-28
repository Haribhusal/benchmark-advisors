import axios from 'axios';
import {
    CLEAR_MESSAGES,
    SIGN_UP,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS,
    LOGIN,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    PROFILE,
    PROFILE_UPDATE,
    PROFILE_UPDATE_FAIL,
    PROFILE_UPDATE_SUCCESS,
    PASSWORD_UPDATE,
    PASSWORD_UPDATE_FAIL,
    PASSWORD_UPDATE_SUCCESS,
} from './types';

// SIGNUP USER
export const signup = (data) => (dispatch) => {
    dispatch({ type: SIGN_UP });
    data['files'] = [];
    var form_data = new FormData();
    for (var key in data) {
        form_data.append(key, data[key]);
    }
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
    };
    axios
        .post('/api/startup/signup/', form_data, config)
        .then((res) => {
            dispatch({
                type: SIGN_UP_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: SIGN_UP_FAIL,
                payload: err.response.data,
            });
        });
};

// LOGIN USER
export const login = (data) => (dispatch) => {
    dispatch({ type: LOGIN });
    var form_data = new FormData();
    for (var key in data) {
        form_data.append(key, data[key]);
    }
    axios
        .post('/api/startup/login', form_data)
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

// GET USER PROFILE
export const getProfile = () => (dispatch) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Brearer ${token}`,
        },
    };
    try {
        axios.get('/api/startup/profile', config).then((res) => {
            dispatch({
                type: PROFILE,
                payload: res.data,
            });
        });
    } catch (error) {
        console.log(error);
    }
};

// Update Startup PROFILE
export const updateStartupProfile = (data) => (dispatch) => {
    dispatch({ type: PROFILE_UPDATE });
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Brearer ${token}`,
        },
    };

    axios
        .post('/api/startup/update-profile', data, config)
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

// Update password
export const updatePassword = (data, userType) => (dispatch) => {
    dispatch({ type: PASSWORD_UPDATE });
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Brearer ${token}`,
        },
    };
    axios
        .post(`/api/${userType}/update-password`, data, config)
        .then((res) => {
            dispatch({
                type: PASSWORD_UPDATE_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: PASSWORD_UPDATE_FAIL,
                payload: err.response.data,
            });
        });
};

// Clear message on page load
export const clearMessages = () => (dispatch) => {
    dispatch({ type: CLEAR_MESSAGES });
};
