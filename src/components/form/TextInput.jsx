import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ value, defaultValue, setValue, className, placeholder }) => {
  const [touched, setTouched] = useState(false);

  const onFocus = () => {
    if (!touched) {
      setValue('');
      setTouched(true);
    }
  };

  const onBlur = () => {
    if (value === '') {
      setValue(defaultValue);
      setTouched(false);
    }
  };

  return (
    <input
      type="text"
      className={className}
      value={value}
      placeholder={placeholder}
      onChange={(event) => setValue(event.target.value)}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  setValue: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  defaultValue: '',
  setValue: null,
  className: '',
  placeholder: '',
};

export default TextInput;
