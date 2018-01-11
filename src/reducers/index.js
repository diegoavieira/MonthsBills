import { combineReducers } from 'redux';
import connectionReducer from './connectionReducer';
import billsReducer from './billsReducer';
import myToastReducer from './myToastReducer';

export default combineReducers({
  connectionReducer,
  billsReducer,
  myToastReducer
});