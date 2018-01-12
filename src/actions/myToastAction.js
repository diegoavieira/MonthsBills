export const setMyToast = values => {
  return {
    type: 'SET_MY_TOAST',
    payload: { ...values }
  };
};