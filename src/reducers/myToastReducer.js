const INITIAL_STATE = {
  myToast: {
    show: 0,
    message: null,
    onPress: null,
    label: null
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_MY_TOAST':
      return { ...state, myToast: { ...action.payload } };
    case 'RESET_MY_TOAST':
      return INITIAL_STATE;
    case 'FETCH_BILLS': {
      if (action.payload.success === false) {
        return { ...state, myToast: { ...action.payload.myToast } }
      } else {
        return state;
      };
    }
    default:
      return state;
  };
};