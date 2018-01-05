const INITIAL_STATE = {
  bills: {
    data: [],
    loading: true,
    success: null,
    message: null
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_BILLS': 
      return { ...state, bills: { ...state.bills, ...action.payload, loading: false } };
    case 'CLEAR_FETCH_BILLS':
      return { ...state, bills: { ...state.bills, loading: true, success: null, message: null } };
    default:
      return state;
  };
};