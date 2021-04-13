import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ name, text }) => (
  <article className="flex flex-col space-y-2 bg-gradient-to-br from-yellow-300 to-red-300 rounded p-2">
    <h1 className="text-3xl font-black">{name}</h1>
    <p>{text}</p>
  </article>
);

Note.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Note;
