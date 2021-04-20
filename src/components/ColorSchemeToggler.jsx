import React from 'react';
import NightIcon from './icons/NightIcon';
import DayIcon from './icons/DayIcon';
import { useColorScheme } from '../contexts/color-scheme-context';

const ColorSchemeToggler = () => {
  const { state: colorScheme, dispatch: toggleColorScheme } = useColorScheme();
  const backgroundTheme = 'bg-light-secondary dark:bg-dark-secondary transition-colors rounded-full';
  const buttonTheme = 'bg-light-primary border-2 border-light-secondary-accent rounded-full';

  return (
    <button
      type="button"
      className={`w-16 h-8 p-0.5 mb-1 relative overflow-hidden flex flex-row justify-between items-center ${backgroundTheme}`}
      onClick={() => toggleColorScheme()}
    >
      <NightIcon className="w-6 h-6 text-amber-400" />
      <DayIcon className="w-6 h-6 text-amber-400" />
      <div className={`h-6 w-6 absolute top-0 m-1 left-${colorScheme === 'dark' ? '8' : '0'} transition-left ${buttonTheme}`} />
    </button>
  );
};

export default ColorSchemeToggler;
