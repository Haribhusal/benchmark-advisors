import axios from 'axios';
import {
    CLEAR_MESSAGES,
    DOCUMENT_UPDATE,
    GET_STARTUP_LIST,
    DOCUMENT_UPDATE_FAIL,
    DOCUMENT_UPDATE_SUCCESS,
} from './types';

// Update Startup PROFILE
export const updateDocument = (data) => (dispatch) => {
    dispatch({ type: DOCUMENT_UPDATE });
    const token = localStorage.getItem('token');

    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            Authorization: `Brearer ${token}`,
        },
    };

    axios
        .post('/api/startup/update-document', data, config)
        .then((res) => {
            dispatch({
                type: DOCUMENT_UPDATE_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: DOCUMENT_UPDATE_FAIL,
                payload: err.response.data,
            });
        });
};

// Get list of Startups
export const getStartupList = () => (dispatch) => {
    const token = localStorage.getItem('token');

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Brearer ${token}`,
        },
    };

    axios
        .get(`/api/startup/list/`, config)
        .then((res) => {
            dispatch({
                type: GET_STARTUP_LIST,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

// Clear message on page load
export const clearMessages = () => (dispatch) => {
    dispatch({ type: CLEAR_MESSAGES });
};
