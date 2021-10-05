import { PROPOSAL_REQUEST } from "../actions/types";

const intialState = {
    isLoading: true,
    message: null,
    submitted: null
};

export default function proposal(state = intialState, action){
    switch (action.type) {
        case PROPOSAL_REQUEST:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                message: action.payload?.message,
                submitted: action.payload?.status
            };
        default:
            return state;
    }
}

