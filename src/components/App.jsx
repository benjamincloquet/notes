import React from 'react';
import SearchBar from './SearchBar';
import Divider from './Divider';
import Notes from './Notes';
import NewNoteButton from './NewNoteButton';
import NewNote from './NewNote';
import Dimmer from './Dimmer';

const App = () => (
  <div className="h-screen w-screen">
    <div className="container p-4 flex flex-col space-y-4">
      <header className="flex flex-col space-y-4">
        <section className="flex justify-between items-center">
          <h1 className="text-5xl font-black">My Notes</h1>
        </section>
        <SearchBar />
      </header>
      <Divider />
      <Notes />
    </div>
    <NewNoteButton />
    <Dimmer />
    <NewNote />
  </div>
);

export default App;
