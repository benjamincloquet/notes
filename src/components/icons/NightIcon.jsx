import React from 'react';
import PropTypes from 'prop-types';

const NightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

NightIcon.propTypes = {
  className: PropTypes.string,
};

NightIcon.defaultProps = {
  className: '',
};

export default NightIcon;
