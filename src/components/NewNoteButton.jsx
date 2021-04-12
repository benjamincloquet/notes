import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from './AddIcon';

const NewNoteButton = ({ onClick }) => (
  <button type="button" className="absolute right-8 bottom-8 bg-black w-16 h-16 rounded-full" onClick={onClick}>
    <AddIcon className="h-10 w-10 text-white mx-auto" width={2} />
  </button>
);

NewNoteButton.propTypes = {
  onClick: PropTypes.func,
};

NewNoteButton.defaultProps = {
  onClick: null,
};

export default NewNoteButton;
