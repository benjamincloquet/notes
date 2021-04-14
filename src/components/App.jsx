import React from 'react';
import SearchBar from './SearchBar';
import Divider from './Divider';
import Notes from './Notes';
import Overlay from './Overlay';

const App = () => (
  <>
    <div className="h-screen w-screen">
      <div className="container h-full p-4 flex flex-col space-y-4 relative">
        <header className="flex flex-col space-y-4">
          <section className="flex justify-between items-center">
            <h1 className="text-5xl font-black">My Notes</h1>
          </section>
          <SearchBar />
        </header>
        <Divider />
        <Notes />
      </div>
      <Overlay />
    </div>
  </>
);

export default App;
