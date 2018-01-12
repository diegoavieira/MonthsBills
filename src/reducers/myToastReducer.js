const INITIAL_STATE = {
  myToast: {
    show: 0,
    message: null,
    onPress: null,
    onPressLabel: null
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_MY_TOAST':
      return { ...state, myToast: { ...action.payload } };
    default:
      return state;
  };
};