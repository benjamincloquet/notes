import { useState } from 'react';

export default (key, initialState) => {
  const [storedState, setStoredState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialState;
    } catch (error) {
      console.error(error);
      return initialState;
    }
  });

  const setState = (newState) => {
    try {
      const newStoredState = newState instanceof Function ? newState(storedState) : newState;
      setStoredState(newStoredState);
      window.localStorage.setItem(key, JSON.stringify(newStoredState));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedState, setState];
};
