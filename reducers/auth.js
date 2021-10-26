import {
    SIGN_UP,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS,
    LOGIN,
    PROFILE,
} from '../actions/types';

const initialState = {
    isLoading: true,
    token: null,
    isAuthenticated: false,
    message: null,
    user: null,
    signupsuccess: null,
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
            localStorage.setItem('token', action.payload?.data?.access_token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                token: action.payload?.data?.access_token,
                message: action.payload?.message,
                user: action.payload?.data,
            };
        case PROFILE:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                user: action.payload?.data,
            };
        default:
            return state;
    }
}
