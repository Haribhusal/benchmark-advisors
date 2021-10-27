import {
    CLEAR_MESSAGES,
    DOCUMENT_UPDATE,
    DOCUMENT_UPDATE_FAIL,
    DOCUMENT_UPDATE_SUCCESS,
} from '../actions/types';

const initialState = {
    successMessage: null,
    errorMessage: null,
};

export default function startUpReducer(state = initialState, action) {
    switch (action.type) {
        case DOCUMENT_UPDATE:
            return {
                ...state,
                successMessage: null,
                errorMessage: null,
            };
        case DOCUMENT_UPDATE_SUCCESS:
            return {
                ...state,
                successMessage: 'File updated successfully!',
            };
        case DOCUMENT_UPDATE_FAIL:
            return {
                ...state,
                errorMessage: action.payload?.message || 'Something went wrong',
            };
        case CLEAR_MESSAGES:
            return {
                ...state,
                successMessage: null,
                errorMessage: null,
            };
        default:
            return state;
    }
}
