import realm from '../config/realm';

export const submitCreateBill = params => {
  const id = realm.objects('Bill').length + 1;
  realm.write(() => {
    realm.create('Bill', { id, ...params });
  });
  return {
    type: 'CREATE_BILL',
    payload: ''
  }
};

export const fetchBills = () => {
  const data = realm.objects('Bill');
  return {
    type: 'FETCH_BILLS',
    payload: { data: Array.from(data), success: true }
  }
};

export const fetchBillsRestore = () => {
  return { type: 'FETCH_BIILS_RESTORE' };
};