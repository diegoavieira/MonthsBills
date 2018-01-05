export const isConnected = connectionInfo => {
  const status = connectionInfo.type.toUpperCase();
  return {
    type: 'IS_CONNECTED',
    payload: { online: status !== 'NONE', message: 'No conection with network.' }
  };
};

export const clearIsConnected = () => {
  return { type: 'CLEAR_IS_CONNECTED' };
}