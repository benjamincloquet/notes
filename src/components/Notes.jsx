import React from 'react';
import Note from './Note';
import { useNotes } from './note-context';

const Notes = () => {
  const { state: notes } = useNotes();

  return (
    <main className="flex flex-col space-y-4">
      {notes.map(({ id, name, text }) => (
        <Note key={id} name={name} text={text} />
      ))}
    </main>
  );
};

export default Notes;
