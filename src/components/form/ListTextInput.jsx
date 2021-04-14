import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ListTextInput = ({ value, setValue, className }) => {
  const [itemInput, setItemInput] = useState('');

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (itemInput !== '') {
        if (!value.includes(itemInput)) {
          setValue([...value, itemInput]);
        }
        setItemInput('');
      }
    }
  };

  return (
    <input
      type="text"
      className={className}
      value={itemInput}
      placeholder="Add a tag..."
      onChange={(event) => setItemInput(event.target.value)}
      onKeyDown={onKeyDown}
    />
  );
};

ListTextInput.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  setValue: PropTypes.func,
  className: PropTypes.string,
};

ListTextInput.defaultProps = {
  setValue: null,
  className: '',
};

export default ListTextInput;
