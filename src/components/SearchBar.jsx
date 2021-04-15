import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './icons/SearchIcon';

const SearchBar = ({ onChange }) => (
  <div className="flex items-center self-stretch bg-gray-100 rounded px-2">
    <input type="text" className="flex-grow bg-gray-100 text-gray-400" placeholder="Search for a note..." onChange={(event) => onChange(event.target.value)} />
    <SearchIcon className="w-8 h-8 p-1 rounded-full text-gray-400" />
  </div>
);

SearchBar.propTypes = {
  onChange: PropTypes.func,
};

SearchBar.defaultProps = {
  onChange: null,
};

export default SearchBar;
