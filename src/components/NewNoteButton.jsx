import React from 'react';
import Button from './Button';
import AddIcon from './AddIcon';
import NoteForm from './NoteForm';
import { useOverlayContent } from './overlay-context';

const NewNoteButton = () => {
  const { dispatch } = useOverlayContent();
  const onClick = () => dispatch({ type: 'push', payload: { component: NoteForm } });

  return (
    <Button className="bg-blue-400 right-8" onClick={onClick}>
      <AddIcon className="h-10 w-10 text-white mx-auto" width={2} />
    </Button>
  );
};

export default NewNoteButton;
