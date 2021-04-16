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
    <button
      type="button"
      onClick={onClick}
      className={`w-full h-40 max-h-full rounded p-2 flex flex-col space-y-2 shadow-lg bg-${note.style.bg} text-${note.style.text}`}
    >
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
    style: PropTypes.shape({ bg: PropTypes.string, text: PropTypes.string }),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Note;
