import { createContext } from 'react';
import makeContext from './stored-context';

const DEFAULT_STATE = { notes: {}, tags: [] };
const NoteContext = createContext();

const storeState = (state) => {
  window.localStorage.setItem('notes', JSON.stringify(state.notes));
  window.localStorage.setItem('tags', JSON.stringify(state.tags));
};

const addUniqueNoteTags = (tags, note) =>
  note.tags.reduce((acc, tag) => {
    if (acc.includes(tag)) {
      return acc;
    }
    return [...acc, tag];
  }, tags);

const writeNote = (state, note) => {
  const tags = addUniqueNoteTags(state.tags, note);
  const newState = { ...state, tags, notes: { ...state.notes, [note.id]: { ...note } } };
  storeState(newState);
  return newState;
};

const removeUniqueNoteTags = (state, note) => {
  const tagsToRemove = note.tags;
  Object.entries(state.notes).forEach(([id, { tags }]) => {
    if (id !== note.id) {
      tagsToRemove.forEach((tag) => {
        if (tags.includes(tag)) {
          const tagIndex = tagsToRemove.indexOf(tag);
          tagsToRemove.splice(tagIndex, 1);
        }
      });
    }
  });
  return state.tags.reduce((acc, tag) => {
    if (!tagsToRemove.includes(tag)) {
      return [...acc, tag];
    }
    return acc;
  }, []);
};

const deleteNote = (state, note) => {
  const newState = { ...state, tags: removeUniqueNoteTags(state, note) };
  delete newState.notes[note.id];
  storeState(newState);
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

const { Provider: NoteProvider, useContext: useNotes } = makeContext(NoteContext, DEFAULT_STATE, noteReducer);

export { NoteProvider, useNotes };
