/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import App from './components/App';
import { OverlayContentProvider } from './contexts/overlay-context';
import { NoteProvider } from './contexts/note-context';
import { ColorSchemeProvider } from './contexts/color-scheme-context';

ReactDOM.render(
  <ColorSchemeProvider>
    <OverlayContentProvider>
      <NoteProvider>
        <App />
      </NoteProvider>
    </OverlayContentProvider>
  </ColorSchemeProvider>,
  document.getElementById('root')
);
