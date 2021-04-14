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
    <section className="flex flex-col space-y-2">
      <input
        type="text"
        className={className}
        value={itemInput}
        placeholder="Add a tag..."
        onChange={(event) => setItemInput(event.target.value)}
        onKeyDown={onKeyDown}
      />
      <div className="flex flex-row flex-wrap">
        {value.map((item) => (
          <div key={item} className="rounded-full bg-yellow-200 py-1 px-2 mx-1 my-1 justify-self-start">
            {item}
          </div>
        ))}
      </div>
    </section>
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
