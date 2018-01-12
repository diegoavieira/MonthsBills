import axios from 'axios';

const REQUEST_DATA = 'https://rest-api-posts.herokuapp.com';  

export const fetchBills = () => {
  const fetchBillsUrl = `${REQUEST_DATA}/bills`; 
  return dispatch => {
    axios.get(fetchBillsUrl).then(result => {
      if (result.status === 200) {
        dispatch({
          type: 'FETCH_BILLS',
          payload: { data: result.data, success: true }
        });
      };
    }).catch(error => {
      dispatch({
        type: 'FETCH_BILLS',
        payload: { success: false, message: error.message }
      });
    });
  };
};

export const fetchBillsRestore = () => {
  return { type: 'FETCH_BIILS_RESTORE' };
};