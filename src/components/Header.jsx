import React from 'react';
import AppName from './AppName';
import ColorSchemeToggler from './ColorSchemeToggler';

const Header = () => (
  <header className="flex justify-between items-end mb-2">
    <AppName />
    <ColorSchemeToggler />
  </header>
);

export default Header;
