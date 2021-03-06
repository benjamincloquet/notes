import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from './form/NoteForm';
import TagList from './TagList';
import { useOverlayContent } from '../contexts/overlay-context';

const Note = ({ note }) => {
  const { dispatch: dispatchOverlay } = useOverlayContent();

  const onClick = () => {
    dispatchOverlay({ type: 'show', payload: { component: NoteForm, props: { note } } });
  };

  return (
    <button type="button" onClick={onClick} className={`flex-shrink-0 w-full h-60 rounded p-2 flex flex-col space-y-2 shadow-lg ${note.style.note}`}>
      <h1 className="text-3xl font-black">{note.name}</h1>
      <TagList tags={note.tags} />
      <p className="overflow-hidden">{note.text}</p>
    </button>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.shape({ note: PropTypes.string }),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Note;
