import React from 'react';
import PropTypes from 'prop-types';

const AddIcon = ({ className, width }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={width} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

AddIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
};

AddIcon.defaultProps = {
  className: '',
  width: 2,
};

export default AddIcon;
