import { createContext } from 'react';
import makeContext from './context';

const INITIAL_STATE = '';
const ColorSchemeContext = createContext();

const colorSchemeReducer = (state) => (state === '' ? 'dark' : '');

const { Provider: ColorSchemeProvider, useContext: useColorScheme } = makeContext(ColorSchemeContext, INITIAL_STATE, colorSchemeReducer);

export { ColorSchemeProvider, useColorScheme };
