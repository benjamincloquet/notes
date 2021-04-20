import React from 'react';
import Header from './Header';
import Notes from './Notes';
import Overlay from './Overlay';
import { useColorScheme } from '../contexts/color-scheme-context';

const App = () => {
  const { state: colorScheme } = useColorScheme();
  const theme = 'bg-light-primary dark:bg-dark-primary transition-colors';

  return (
    <div className={colorScheme}>
      <div className={`h-screen w-screen ${theme}`}>
        <div className="container mx-auto h-full p-4 flex flex-col space-y-4 relative">
          <Header />
          <Notes />
        </div>
        <Overlay />
      </div>
    </div>
  );
};

export default App;
