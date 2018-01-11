export const setMyToast = values => {
  return {
    type: 'SET_MY_TOAST',
    payload: { ...values }
  };
};

export const resetMyToast = () => {
  return { type: 'RESET_MY_TOAST' };
};