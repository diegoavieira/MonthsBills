import axios from 'axios';

const REQUEST_DATA = 'https://rest-api-posts.herokuapp.com';  

export const fetchBills = refreshFn => {
  const fetchBillsUrl = `${REQUEST_DATA}/bills`; 
  return dispatch => {
    axios.get(fetchBillsUrl).then(result => {
      if (result.status === 200) {
        dispatch({
          type: 'FETCH_BILLS',
          payload: { success: true, data: result.data }
        });
      };
    }).catch(error => {
      dispatch({
        type: 'FETCH_BILLS',
        payload: {
          success: false,
          myToast: {
            show: 1,
            onPress: refreshFn,
            message: 'Offline server. Try again to sync.',
            label: 'Try again'
          }
        }
      });
    });
  };
};

export const clearFetchBills = () => {
  return { type: 'CLEAR_FETCH_BILLS' };
};