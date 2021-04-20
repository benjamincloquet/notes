import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './icons/SearchIcon';

const SearchBar = ({ onChange }) => {
  const theme = 'bg-light-secondary text-light-secondary-accent dark:bg-dark-secondary dark:text-dark-secondary-accent transition-colors';
  const inputTheme = `bg-white bg-opacity-0 placeholder-light-secondary-accent dark:placeholder-dark-secondary-accent`;

  return (
    <div className={`flex items-center self-stretch rounded px-2 ${theme}`}>
      <input type="text" className={`flex-grow ${inputTheme}`} placeholder="Search for a note..." onChange={(event) => onChange(event.target.value)} />
      <SearchIcon className="w-8 h-8 p-1 rounded-full" />
    </div>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
};

SearchBar.defaultProps = {
  onChange: null,
};

export default SearchBar;
