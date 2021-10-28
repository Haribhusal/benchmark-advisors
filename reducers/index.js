import { combineReducers } from 'redux';
import auth from './auth';
import common from './common';
import proposal from './proposal';
import investorSignup from './investor';
import startUpReducer from './startup';

const rootReducer = combineReducers({
    auth,
    common,
    proposal,
    startUpReducer,
    investorSignup,
});

export default rootReducer;
