import { combineReducers } from 'redux';
import authenticationReducer from './auth';

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
});

export default rootReducer;
