const INITIAL_STATE = {
  connection: {
    online: null
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'IS_CONNECTED':
      return { ...state, connection: { ...action.payload } };
    default:
      return state;
  };
};