import { combineReducers } from 'redux';
import routersReducer from './routersReducer';
import connectionReducer from './connectionReducer';
import billsReducer from './billsReducer';
import { reducer as form } from 'redux-form';

export default combineReducers({
  routersReducer,
  connectionReducer,
  billsReducer,
  form
});