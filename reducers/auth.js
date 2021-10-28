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
} from '../actions/types';

const initialState = {
    isLoading: true,
    token: null,
    isAuthenticated: false,
    message: null,
    user: null,
    signupsuccess: null,
    successMessage: null,
    errorMessage: null,
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                isLoading: true,
                token: null,
                isAuthenticated: false,
                message: null,
                user: null,
                signupsuccess: null,
                errorMessage: null,
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                ...action.payload,
                message: action.payload?.message,
                user: action.payload?.data,
                isLoading: false,
                signupsuccess: true,
            };
        case SIGN_UP_FAIL:
            return {
                ...state,
                signupsuccess: null,
                errorMessage:
                    action.payload?.data?.email?.[0] || 'Something went wrong',
            };
        case LOGIN:
            return {
                ...state,
                errorMessage: null,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload?.data?.access_token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                token: action.payload?.data?.access_token,
                message: action.payload?.message,
                user: action.payload?.data,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                errorMessage: action.payload.message,
            };
        case PROFILE:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                user: action.payload?.data,
            };
        case PROFILE_UPDATE:
            return {
                ...state,
                isLoading: true,
                successMessage: null,
                errorMessage: null,
            };
        case PROFILE_UPDATE_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload?.message || 'Something went wrong',
            };
        case PROFILE_UPDATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                successMessage:
                    action.payload?.successMessage ||
                    'Profile Updated Successfully',
            };
        case PASSWORD_UPDATE:
            return {
                ...state,
                isLoading: true,
                successMessage: null,
                errorMessage: null,
            };
        case PASSWORD_UPDATE_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload?.message || 'Something went wrong',
            };
        case PASSWORD_UPDATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                successMessage:
                    action.payload?.successMessage ||
                    'Profile Updated Successfully',
            };
        case CLEAR_MESSAGES:
            return {
                ...state,
                isLoading: null,
                successMessage: null,
                errorMessage: null,
            };
        default:
            return state;
    }
}
