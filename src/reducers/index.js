import { combineReducers } from 'redux';
import connectionReducer from './connectionReducer';
import billsReducer from './billsReducer';

export default combineReducers({
  connectionReducer,
  billsReducer
});