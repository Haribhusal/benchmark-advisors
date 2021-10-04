import { combineReducers } from "redux";
import auth from "./auth";
import common from "./common";
import proposal from "./proposal";

const rootReducer = combineReducers({
    auth,
    common,
    proposal,
}); 

export default rootReducer;