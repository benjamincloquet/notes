import React from 'react';
import SearchIcon from './SearchIcon';

const SearchBar = () => (
  <div className="flex items-center self-stretch bg-gray-100 rounded px-2">
    <input type="text" className="flex-grow bg-gray-100 text-gray-400" placeholder="Search for a note..." />
    <SearchIcon className="w-8 h-8 p-1 rounded-full text-gray-400" />
  </div>
);

export default SearchBar;
