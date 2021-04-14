import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from './form/NoteForm';
import { useOverlayContent } from '../contexts/overlay-context';

const Note = ({ note }) => {
  const { dispatch: dispatchOverlay } = useOverlayContent();

  const onClick = () => {
    dispatchOverlay({ type: 'show', payload: { component: NoteForm, props: { note } } });
  };

  return (
    <button type="button" onClick={onClick} className="w-full h-40 max-h-full bg-gradient-to-br from-yellow-300 to-red-300 rounded p-2 flex flex-col space-y-2">
      <h1 className="text-3xl font-black">{note.name}</h1>
      <p className="overflow-hidden">{note.text}</p>
    </button>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Note;
