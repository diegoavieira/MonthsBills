import { combineReducers } from 'redux';
import routersReducer from './routersReducer';
import connectionReducer from './connectionReducer';
import billsReducer from './billsReducer';

export default combineReducers({
  routersReducer,
  connectionReducer,
  billsReducer,
});