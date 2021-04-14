import React from 'react';
import SearchBar from './SearchBar';
import TagList from './TagList';
import { useNotes } from '../contexts/note-context';

const Header = () => {
  const {
    state: { tags },
  } = useNotes();

  return (
    <header className="flex flex-col space-y-4">
      <section className="flex justify-between items-center">
        <h1 className="text-5xl font-black">My Notes</h1>
      </section>
      <SearchBar />
      <TagList tags={tags} />
    </header>
  );
};

export default Header;
