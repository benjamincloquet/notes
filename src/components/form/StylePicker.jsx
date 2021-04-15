import React from 'react';
import PropTypes from 'prop-types';

const StylePicker = ({ value, setValue, styles, className }) => (
  <div className={className}>
    {styles.map((style) => {
      const checked = value === style;
      return (
        <div key={style.id} className="w-10 h-10 relative p-0.5">
          <input type="radio" value={style} name="style" checked={checked} onChange={() => setValue(style)} className="w-full h-full border-0 cursor-pointer" />
          <div className={`w-full h-full rounded-full absolute top-0 left-0 pointer-events-none shadow bg-${style.bg} ${checked ? 'ring-4' : 'null'}`} />
        </div>
      );
    })}
  </div>
);

StylePicker.propTypes = {
  value: PropTypes.shape({ bg: PropTypes.string, text: PropTypes.string }).isRequired,
  setValue: PropTypes.func,
  styles: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};

StylePicker.defaultProps = {
  setValue: null,
  styles: [],
  className: '',
};

export default StylePicker;
