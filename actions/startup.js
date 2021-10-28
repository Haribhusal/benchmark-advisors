import axios from 'axios';
import {
    CLEAR_MESSAGES,
    DOCUMENT_UPDATE,
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

// Clear message on page load
export const clearMessages = () => (dispatch) => {
    dispatch({ type: CLEAR_MESSAGES });
};
