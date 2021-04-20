import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ className }) => (
  <div className={`w-100 border border-light-primary-accent border-opacity-30 dark:border-dark-secondary transition-colors ${className}`} />
);

Divider.propTypes = {
  className: PropTypes.string,
};

Divider.defaultProps = {
  className: '',
};

export default Divider;
