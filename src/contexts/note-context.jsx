import { createContext } from 'react';
import makeContext from './context';

const DEFAULT_STATE = { notes: {}, tags: [] };
const NoteContext = createContext();
NoteContext.displayName = 'NoteContext';
const KEY = 'notes';

const writeNote = (state, note) => ({ ...state, notes: { ...state.notes, [note.id]: note } });

const deleteNote = (state, note) => {
  const newState = { ...state };
  delete newState.notes[note.id];
  return newState;
};

const noteReducer = (state, action) => {
  switch (action.type) {
    case 'write': {
      return writeNote(state, action.payload);
    }
    case 'delete': {
      return deleteNote(state, action.payload);
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const addUniqueTags = (state, note) =>
  note.tags.reduce((acc, tag) => {
    if (acc.includes(tag)) {
      return acc;
    }
    return [...acc, tag];
  }, state.tags);

const deleteUniqueTags = (state, note) => {
  const tagsToDelete = note.tags;
  Object.entries(state.notes).forEach(([id, { tags }]) => {
    if (id !== note.id) {
      tagsToDelete.forEach((tag) => {
        if (tags.includes(tag)) {
          const tagIndex = tagsToDelete.indexOf(tag);
          tagsToDelete.splice(tagIndex, 1);
        }
      });
    }
  });
  return state.tags.reduce((acc, tag) => {
    if (!tagsToDelete.includes(tag)) {
      return [...acc, tag];
    }
    return acc;
  }, []);
};

const tagReducer = (state, action) => {
  switch (action.type) {
    case 'write': {
      return { ...state, tags: addUniqueTags(state, action.payload) };
    }
    case 'delete': {
      return { ...state, tags: deleteUniqueTags(state, action.payload) };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const reducer = (state, action) => tagReducer(noteReducer(state, action), action);

const { Provider: NoteProvider, useContext: useNotes } = makeContext({ context: NoteContext, key: KEY, defaultState: DEFAULT_STATE, reducer });

export { NoteProvider, useNotes };
