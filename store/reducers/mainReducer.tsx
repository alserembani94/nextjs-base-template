import { combineReducers } from 'redux';
import oneReducer from './one';
// import twoReducer from './two';

// Combine all reducers here
export default combineReducers({
    one: oneReducer,
    // two: twoReducer,
});