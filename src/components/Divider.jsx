import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ style }) => <div className={`w-100 border ${style}`} />;

Divider.propTypes = {
  style: PropTypes.string,
};

Divider.defaultProps = {
  style: '',
};

export default Divider;
