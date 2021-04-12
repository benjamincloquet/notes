import React from 'react';
import PropTypes from 'prop-types';
import Dimmer from './Dimmer';

const Overlay = ({ children }) => (
  <>
    <Dimmer />
    {children}
  </>
);

Overlay.propTypes = {
  children: PropTypes.node,
};

Overlay.defaultProps = {
  children: null,
};

export default Overlay;
