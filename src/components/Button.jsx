/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, type, children }) => (
  <button type={type} className={`absolute bottom-8 w-16 h-16 rounded-full ${className}`} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  onClick: () => {},
  className: null,
  type: 'button',
  children: null,
};

export default Button;
