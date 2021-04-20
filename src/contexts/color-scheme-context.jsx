import { createContext } from 'react';
import makeContext from './stored-context';

const DEFAULT_STATE = '';
const ColorSchemeContext = createContext();
ColorSchemeContext.displayName = 'ColorSchemeContext';
const KEY = 'color-scheme';

const colorSchemeReducer = (state) => (state === '' ? 'dark' : '');

const { Provider: ColorSchemeProvider, useContext: useColorScheme } = makeContext(ColorSchemeContext, KEY, DEFAULT_STATE, colorSchemeReducer);

export { ColorSchemeProvider, useColorScheme };
