import React from 'react';
import AddIcon from './AddIcon';

const NewNoteButton = () => (
  <button type="button" className="absolute right-8 bottom-8 bg-black w-16 h-16 rounded-full">
    <AddIcon className="h-10 w-10 text-white mx-auto" width={2} />
  </button>
);

export default NewNoteButton;
