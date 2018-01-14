import { AppNavigator } from '../config/Routers';

const INITIAL_STATE = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home')
);

export default (state = INITIAL_STATE, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};