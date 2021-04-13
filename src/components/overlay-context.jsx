import { createContext } from 'react';
import makeContext from './context';

const INITIAL_STATE = [];
const OverlayContentContext = createContext();

const overlayContentReducer = (state, action) => {
  switch (action.type) {
    case 'push': {
      return [...state, action.payload];
    }
    case 'pop': {
      const newState = [...state];
      newState.pop();
      return newState;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const { Provider: OverlayContentProvider, useContext: useOverlayContent } = makeContext(OverlayContentContext, INITIAL_STATE, overlayContentReducer);

export { OverlayContentProvider, useOverlayContent };
