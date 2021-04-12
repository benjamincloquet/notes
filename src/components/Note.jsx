import React from 'react';

const Note = () => (
  <article className="flex flex-col space-y-2 bg-gradient-to-br from-yellow-300 to-red-300 rounded p-2">
    <h1 className="text-3xl font-black">I am a note</h1>
    <p>This is the content of the note</p>
  </article>
);

export default Note;
