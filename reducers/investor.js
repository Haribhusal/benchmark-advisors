import {
    INVESTOR_SIGNUP,
    INVESTOR_SIGNUP_FAIL,
    INVESTOR_SIGNUP_SUCCESS,
} from '../actions/types';

const initialState = {
    investor: null,
    signupsuccess: null,
    errorMessage: null,
};

export default function investorSignup(state = initialState, action) {
    switch (action.type) {
        case INVESTOR_SIGNUP:
            return {
                ...state,
                signupsuccess: null,
                errorMessage: null,
            };
        case INVESTOR_SIGNUP_SUCCESS:
            return {
                ...state,
                ...action.payload,
                investor: action.payload?.data,
                signupsuccess: true,
                errorMessage: null,
            };
        case INVESTOR_SIGNUP_FAIL:
            return {
                ...state,
                errorMessage: action.payload?.data?.email?.[0],
            };
        default:
            return state;
    }
}
