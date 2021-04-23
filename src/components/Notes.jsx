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
  const [searchTerm, setSearchTerm] = useState('');

  const matchTag = (note) => selectedTag === null || note.tags.includes(selectedTag);

  const matchSearchTerm = (note) => note.name.toLowerCase().includes(searchTerm.toLowerCase());

  const filterNote = (note) => matchTag(note) && matchSearchTerm(note);

  const renderTags = () =>
    tags.length > 0 ? (
      <TagList tags={tags} onClick={(tag) => setSelectedTag((previousTag) => (tag === previousTag ? null : tag))} selectedTag={selectedTag} />
    ) : null;

  const renderNotes = () => noteArray.filter(filterNote).map((note) => <Note key={note.id} note={note} />);

  return (
    <>
      <SearchBar onChange={setSearchTerm} />
      {renderTags()}
      <Divider />
      <main className="flex-grow flex flex-col items-center content-start space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:gap-8 overflow-y-auto p-1">
        {noteArray.length > 0 ? (
          renderNotes()
        ) : (
          <h2 className="font-medium text-light-primary-accent dark:text-dark-primary-accent text-lg">Create a new note !</h2>
        )}
        <NewNoteButton className={noteArray.length > 0 ? 'absolute right-8 bottom-8' : ''} />
      </main>
    </>
  );
};

export default Notes;
