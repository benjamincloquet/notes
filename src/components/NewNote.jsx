import React from 'react';

const NewNote = () => (
  <section className="w-screen h-screen absolute top-0 p-4">
    <main className="bg-white h-full rounded p-4">
      <input type="text" className="text-5xl font-black w-full" defaultValue="New Note" placeholder="Note name" />
    </main>
  </section>
);

export default NewNote;
