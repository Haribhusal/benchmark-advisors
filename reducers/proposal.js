import { PROPOSAL_REQUEST } from "../actions/types";

const intialState = {
    isLoading: true
};

export default function proposal(state = intialState, action){
    switch (action.type) {
        case PROPOSAL_REQUEST:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
}

