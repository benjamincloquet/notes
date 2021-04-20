import makeContext from './context';

export default (Context, key, defaultState, reducer) => {
  const getStoredOrDefaultValue = () => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultState;
  };

  const initialState = getStoredOrDefaultValue();

  const storeState = (state) => {
    window.localStorage.setItem(key, JSON.stringify(state));
  };

  const reducerWithStorage = (state, action) => {
    const newState = reducer(state, action);
    storeState(newState);
    return newState;
  };

  return makeContext(Context, initialState, reducerWithStorage);
};
