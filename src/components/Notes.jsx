import React from 'react';
import Note from './Note';
import NewNoteButton from './NewNoteButton';
import { useNotes } from '../contexts/note-context';

const Notes = () => {
  const {
    state: { notes },
  } = useNotes();
  const noteArray = Object.values(notes);

  const renderNotes = () => noteArray.map((note) => <Note key={note.id} note={note} />);

  return (
    <main className="flex-grow flex flex-col items-center space-y-4 overflow-scroll">
      {noteArray.length > 0 ? renderNotes() : <h2>Create a new note !</h2>}
      <NewNoteButton className={notes.length > 0 ? 'absolute right-8 bottom-8' : ''} />
    </main>
  );
};

export default Notes;
