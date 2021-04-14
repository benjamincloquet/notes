import React, { useState } from 'react';
import Divider from './Divider';
import Note from './Note';
import SearchBar from './SearchBar';
import TagList from './TagList';
import NewNoteButton from './NewNoteButton';
import { useNotes } from '../contexts/note-context';

const Notes = () => {
  const {
    state: { notes, tags },
  } = useNotes();
  const noteArray = Object.values(notes);
  const [selectedTag, setSelectedTag] = useState(null);

  const renderNotes = () =>
    noteArray.filter((note) => selectedTag === null || note.tags.includes(selectedTag)).map((note) => <Note key={note.id} note={note} />);

  return (
    <>
      <header className="flex flex-col space-y-4">
        <section className="flex justify-between items-center">
          <h1 className="text-5xl font-black">My Notes</h1>
        </section>
        <SearchBar />
        <TagList tags={tags} onClick={(tag) => setSelectedTag((previousTag) => (tag === previousTag ? null : tag))} selectedTag={selectedTag} />
      </header>
      <Divider />
      <main className="flex-grow flex flex-col items-center space-y-4 overflow-scroll">
        {noteArray.length > 0 ? renderNotes() : <h2>Create a new note !</h2>}
        <NewNoteButton className={noteArray.length > 0 ? 'absolute right-8 bottom-8' : ''} />
      </main>
    </>
  );
};

export default Notes;
