const INITIAL_STATE = {
  connection: {
    online: null,
    message: null
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'IS_CONNECTED':
      return { ...state, connection: { ...action.payload } };
    case 'CLEAR_IS_CONNECTED': 
      return INITIAL_STATE;
    default:
      return state;
  };
};