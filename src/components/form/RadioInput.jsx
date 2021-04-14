import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({ value, setValue, possibleValues, className }) => (
  <div className={className}>
    {possibleValues.map((possibleValue) => {
      const checked = value === possibleValue;
      return (
        <div key={possibleValue} className="w-8 h-8 relative">
          <input
            type="radio"
            value={possibleValue}
            name="style"
            checked={checked}
            onChange={(event) => setValue(event.target.value)}
            className="w-full h-full cursor-pointer"
          />
          <div className={`w-full h-full rounded-full absolute top-0 pointer-events-none ${possibleValue} ${checked ? 'ring-4' : 'null'}`} />
        </div>
      );
    })}
  </div>
);

RadioInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func,
  possibleValues: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

RadioInput.defaultProps = {
  setValue: null,
  possibleValues: [],
  className: '',
};

export default RadioInput;
