import React, { useState } from 'react';
import Divider from './Divider';
import Note from './Note';
import SearchBar from './SearchBar';
import TagList from './TagList';
import NewNoteButton from './NewNoteButton';
import NightIcon from './icons/NightIcon';
import DayIcon from './icons/DayIcon';
import { useNotes } from '../contexts/note-context';
import { useColorScheme } from '../contexts/color-scheme-context';

const Notes = () => {
  const { state: colorScheme, dispatch: toggleColorScheme } = useColorScheme();

  const {
    state: { notes, tags },
  } = useNotes();
  const noteArray = Object.values(notes);
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const matchTag = (note) => selectedTag === null || note.tags.includes(selectedTag);

  const matchSearchTerm = (note) => note.name.toLowerCase().includes(searchTerm.toLowerCase());

  const filterNote = (note) => matchTag(note) && matchSearchTerm(note);

  const renderNotes = () => noteArray.filter(filterNote).map((note) => <Note key={note.id} note={note} />);

  return (
    <>
      <header className="flex flex-col space-y-2">
        <section className="flex justify-between items-end mb-2">
          <h1 className="text-5xl font-black">My Notes</h1>
          <button
            type="button"
            className="w-16 h-8 p-0.5 mb-1 relative rounded-full overflow-hidden bg-gray-100 dark:bg-blueGray-800 transition-colors flex flex-row justify-between items-center"
            onClick={() => toggleColorScheme()}
          >
            <NightIcon className="w-6 h-6 text-amber-400" />
            <DayIcon className="w-6 h-6 text-amber-400" />
            <div
              className={`h-6 w-6 absolute top-0 m-1 left-${colorScheme === 'dark' ? '8' : '0'} transition-left rounded-full bg-white border-2 border-gray-400`}
            />
          </button>
        </section>
        <SearchBar onChange={setSearchTerm} />
        <TagList tags={tags} onClick={(tag) => setSelectedTag((previousTag) => (tag === previousTag ? null : tag))} selectedTag={selectedTag} />
      </header>
      <Divider />
      <main className="flex-grow flex flex-col items-center space-y-4 overflow-y-auto">
        {noteArray.length > 0 ? renderNotes() : <h2>Create a new note !</h2>}
        <NewNoteButton className={noteArray.length > 0 ? 'absolute right-8 bottom-8' : ''} />
      </main>
    </>
  );
};

export default Notes;
