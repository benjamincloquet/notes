import React from 'react';
import Header from './Header';
import Divider from './Divider';
import Notes from './Notes';
import Overlay from './Overlay';

const App = () => (
  <>
    <div className="h-screen w-screen">
      <div className="container h-full p-4 flex flex-col space-y-4 relative">
        <Header />
        <Divider />
        <Notes />
      </div>
      <Overlay />
    </div>
  </>
);

export default App;
