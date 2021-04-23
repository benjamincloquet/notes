import { createContext } from 'react';
import makeContext from './context';

const DEFAULT_STATE = '';
const ColorSchemeContext = createContext();
ColorSchemeContext.displayName = 'ColorSchemeContext';
const KEY = 'color-scheme';

const colorSchemeReducer = (state) => (state === '' ? 'dark' : '');

const { Provider: ColorSchemeProvider, useContext: useColorScheme } = makeContext({
  context: ColorSchemeContext,
  key: KEY,
  defaultState: DEFAULT_STATE,
  reducer: colorSchemeReducer,
});

export { ColorSchemeProvider, useColorScheme };
