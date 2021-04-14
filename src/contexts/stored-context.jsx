import makeContext from './context';

export default (Context, defaultState, reducer) => {
  const getStoredOrDefaultValue = (key) => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultState[key];
  };

  const initialState = Object.keys(defaultState).reduce((acc, key) => ({ ...acc, [key]: getStoredOrDefaultValue(key) }), defaultState);

  return makeContext(Context, initialState, reducer);
};
