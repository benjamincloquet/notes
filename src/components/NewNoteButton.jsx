import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import AddIcon from './icons/AddIcon';
import NoteForm from './form/NoteForm';
import { useOverlayContent } from '../contexts/overlay-context';

const NewNoteButton = ({ className }) => {
  const { dispatch } = useOverlayContent();
  const onClick = () => dispatch({ type: 'show', payload: { component: NoteForm } });

  return (
    <Button className={`bg-blue-400 ${className}`} onClick={onClick}>
      <AddIcon className="h-10 w-10 text-white mx-auto" width={2} />
    </Button>
  );
};

NewNoteButton.propTypes = {
  className: PropTypes.string,
};

NewNoteButton.defaultProps = {
  className: null,
};

export default NewNoteButton;
