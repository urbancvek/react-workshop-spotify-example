// @flow
const save = (key: string, payload: any) => {
  const preparedPayload = JSON.stringify(payload);
  window.localStorage.setItem(key, preparedPayload);
};

const load = (key: string) => {
  const retrievedData = window.localStorage.getItem(key);
  return JSON.parse(retrievedData);
};

export { save, load };
