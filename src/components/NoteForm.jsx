import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import SaveIcon from './SaveIcon';
import CancelIcon from './CancelIcon';
import { useNotes } from './note-context';
import { useOverlayContent } from './overlay-context';

const NoteForm = () => {
  const [note, setNote] = useState({ name: 'New Note', text: '' });
  const [touched, setTouched] = useState(false);

  const setProperty = (property, value) => {
    setNote((previousNote) => ({ ...previousNote, [property]: value }));
  };

  const onNameFocus = () => {
    if (!touched) {
      setProperty('name', '');
      setTouched(true);
    }
  };

  const onNameBlur = () => {
    if (note.name === '') {
      setProperty('name', 'New Note');
    }
  };

  const { dispatch: dispatchNote } = useNotes();
  const { dispatch: dispatchOverlay } = useOverlayContent();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatchNote({ type: 'add', payload: { ...note, id: uuidv4() } });
    dispatchOverlay({ type: 'pop' });
  };

  return (
    <form className="flex flex-col space-y-2 bg-white h-full rounded p-4" onSubmit={onSubmit}>
      <input
        type="text"
        className="text-5xl font-black w-full"
        value={note.name}
        placeholder="Note name"
        onChange={(event) => setProperty('name', event.target.value)}
        onFocus={onNameFocus}
        onBlur={onNameBlur}
      />
      <textarea
        name="content"
        id="content"
        value={note.text}
        placeholder="Tap to start typing !"
        className="resize-none p-2 w-full flex-grow"
        onChange={(event) => setProperty('text', event.target.value)}
      />
      <Button className="bg-blue-400 right-8" type="submit">
        <SaveIcon className="h-10 w-10 text-white mx-auto" width={2} />
      </Button>
      <Button className="bg-red-400 left-8" onClick={() => dispatchOverlay({ type: 'pop' })}>
        <CancelIcon className="h-10 w-10 text-white mx-auto" width={2} />
      </Button>
    </form>
  );
};

export default NoteForm;
