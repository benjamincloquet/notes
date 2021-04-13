import React from 'react';
import PropTypes from 'prop-types';

const SaveIcon = ({ className, width }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={width}
      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
    />
  </svg>
);

SaveIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
};

SaveIcon.defaultProps = {
  className: '',
  width: 2,
};

export default SaveIcon;
