/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import App from './components/App';
import { OverlayContentProvider } from './components/overlay-context';
import { NoteProvider } from './components/note-context';

ReactDOM.render(
  <OverlayContentProvider>
    <NoteProvider>
      <App />
    </NoteProvider>
  </OverlayContentProvider>,
  document.getElementById('root')
);
