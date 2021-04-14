import React from 'react';
import PropTypes from 'prop-types';

const CancelIcon = ({ className, width }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={width} d="M15 19l-7-7 7-7" />
  </svg>
);

CancelIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
};

CancelIcon.defaultProps = {
  className: '',
  width: 2,
};

export default CancelIcon;
