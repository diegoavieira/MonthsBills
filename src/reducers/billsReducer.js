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
    case 'FETCH_BIILS_RESTORE':
      return { ...state, bills: { ...state.bills, loading: true, message: null, success: null } };
    default:
      return state;
  };
};