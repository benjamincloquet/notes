import React from 'react';
import Notes from './Notes';
import Overlay from './Overlay';

const App = () => (
  <>
    <div className="h-screen w-screen">
      <div className="container h-full p-4 flex flex-col space-y-4 relative">
        <Notes />
      </div>
      <Overlay />
    </div>
  </>
);

export default App;
