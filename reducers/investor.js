import { INVESTOR_SIGNUP } from "../actions/types";

const initialState = {
  investor: null,
  signupsuccess: null,
};

export default function investorSignup(state = initialState, action) {
  switch (action.type) {
    case INVESTOR_SIGNUP:
      return {
        ...state,
        ...action.payload,
        investor: action.payload?.data,
        signupsuccess: true,
      };
    default:
      return state;
  }
}
