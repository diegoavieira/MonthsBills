import axios from 'axios';

const REQUEST_DATA = 'https://rest-api-posts.herokuapp.com';  

export const fetchBills = () => {
  const fetchBillsUrl = `${REQUEST_DATA}/posts`; 
  return dispatch => {
    axios.get(fetchBillsUrl).then(result => {
      if (result.status === 200) {
        dispatch({
          type: 'FETCH_BILLS',
          payload: { success: true, data: result.data, message: 'Bills list updated.' }
        });
      };
    }).catch(error => {
      dispatch({
        type: 'FETCH_BILLS',
        payload: { success: false, message: 'Offline server. Try again.' }
      });
    });
  };
};

export const clearFetchBills = () => {
  return { type: 'CLEAR_FETCH_BILLS' };
};