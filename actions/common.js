import axios from 'axios';
import {
    GET_COMPANY_CATEGORIES,
    GET_DOCUMTE_CATEGORIES,
    GET_STATES,
    GET_DISTRICTS,
    GET_MUNICIPALITIES,
} from '../actions/types';

export const getCompanyCategory = () => dispatch => {
    axios.get('/api/company-category/list')
        .then(res => {
            dispatch({
                type: GET_COMPANY_CATEGORIES,
                payload: res.data
            });
        })
};  

export const getDocumentCategory = () => dispatch => {
    axios.get('/api/document/list')
        .then(res => {
            dispatch({
                type: GET_DOCUMTE_CATEGORIES,
                payload: res.data
            });
        })
};

export const getStates = () => dispatch => {
    axios.get('/api/state/list')
        .then(res => {
            dispatch({
                type: GET_STATES,
                payload: res.data
            });
        })
}

export const getDistricts = () => dispatch => {
    axios.get(`/api/district/list/`)
        .then(res => {
            dispatch({
                type: GET_DISTRICTS,
                payload: res.data
            });
        })
}

export const getMunicipalities = () => dispatch => {
    axios.get(`/api/municipality/list/`)
        .then(res => {
            dispatch({
                type: GET_MUNICIPALITIES,
                payload: res.data
            });
        })
}