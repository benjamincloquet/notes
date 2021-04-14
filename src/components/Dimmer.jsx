import React from 'react';
import PropTypes from 'prop-types';

const Dimmer = ({ visible }) => (
  <div
    className={`w-screen h-screen bg-black fixed top-0 ${visible ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity`}
  />
);

Dimmer.propTypes = {
  visible: PropTypes.bool,
};

Dimmer.defaultProps = {
  visible: true,
};

export default Dimmer;
