import { createContext } from 'react';
import makeContext from './context';

const INITIAL_STATE = {};
const NoteContext = createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case 'write': {
      return { ...state, [action.payload.id]: { ...action.payload } };
    }
    case 'delete': {
      const newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const { Provider: NoteProvider, useContext: useNotes } = makeContext(NoteContext, INITIAL_STATE, noteReducer);

export { NoteProvider, useNotes };
