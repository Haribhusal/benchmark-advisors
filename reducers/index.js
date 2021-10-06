import { combineReducers } from "redux";
import auth from "./auth";
import common from "./common";
import proposal from "./proposal";
import investorSignup from "./investor";

const rootReducer = combineReducers({
  auth,
  common,
  proposal,
  investorSignup,
});

export default rootReducer;
