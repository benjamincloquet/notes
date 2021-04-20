import React from 'react';

const AppName = () => {
  const theme = 'text-light-primary-accent dark:text-dark-primary-accent';
  return <h1 className={`text-5xl font-black ${theme}`}>My Notes</h1>;
};

export default AppName;
