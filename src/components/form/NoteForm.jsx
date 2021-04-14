import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import TextInput from './TextInput';
import ListTextInput from './ListTextInput';
import Button from '../Button';
import SaveIcon from '../icons/SaveIcon';
import CancelIcon from '../icons/CancelIcon';
import DeleteIcon from '../icons/DeleteIcon';
import { useNotes } from '../note-context';
import { useOverlayContent } from '../overlay-context';

const NoteForm = ({ note: openedNote }) => {
  const initialState = openedNote ?? { name: 'New Note', text: '', tags: [], id: uuidv4() };
  const [note, setNote] = useState(initialState);

  const setProperty = (property, value) => {
    setNote((previousNote) => ({ ...previousNote, [property]: value }));
  };

  const { dispatch: dispatchNote } = useNotes();
  const { dispatch: dispatchOverlay } = useOverlayContent();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatchNote({ type: 'write', payload: note });
    dispatchOverlay({ type: 'hide', payload: { component: NoteForm } });
  };

  const onClickDelete = () => {
    dispatchNote({ type: 'delete', payload: note });
    dispatchOverlay({ type: 'hide', payload: { component: NoteForm } });
  };

  return (
    <form className="flex flex-col space-y-2 bg-white h-full rounded p-4" onSubmit={onSubmit}>
      <TextInput value={note.name} defaultValue={initialState.name} setValue={(value) => setProperty('name', value)} className="text-5xl font-black w-full" />
      <ListTextInput
        value={note.tags}
        defaultValue={initialState.tags}
        setValue={(value) => setProperty('tags', value)}
        className="text-lg font-medium w-full"
      />
      <textarea
        name="content"
        id="content"
        value={note.text}
        placeholder="Tap to start typing !"
        className="resize-none p-2 w-full flex-grow"
        onChange={(event) => setProperty('text', event.target.value)}
      />
      <div className="flex flex-row justify-between">
        <Button className="bg-gray-400  00 left-8" onClick={() => dispatchOverlay({ type: 'hide', payload: { component: NoteForm } })}>
          <CancelIcon className="h-10 w-10 text-white mx-auto" width={2} />
        </Button>
        {openedNote ? (
          <Button className="bg-red-400 mx-auto" onClick={onClickDelete}>
            <DeleteIcon className="h-10 w-10 text-white mx-auto" width={2} />
          </Button>
        ) : null}
        <Button className="bg-blue-400 right-8" type="submit">
          <SaveIcon className="h-10 w-10 text-white mx-auto" width={2} />
        </Button>
      </div>
    </form>
  );
};

NoteForm.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

NoteForm.defaultProps = {
  note: null,
};

export default NoteForm;
