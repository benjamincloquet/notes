import { createContext } from 'react';
import makeContext from './context';

const INITIAL_STATE = [];
const NoteContext = createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return [...state, action.payload];
    }
    case 'remove': {
      return [...state].filter(({ id }) => id !== action.payload);
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const { Provider: NoteProvider, useContext: useNotes } = makeContext(NoteContext, INITIAL_STATE, noteReducer);

export { NoteProvider, useNotes };
