import Head from 'next/head';
import App from '../src/components/App';
import { OverlayContentProvider } from '../src/contexts/overlay-context';
import { NoteProvider } from '../src/contexts/note-context';
import { ColorSchemeProvider } from '../src/contexts/color-scheme-context';

export default function Home() {
  return (
    <>
      <Head>
        <title>Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorSchemeProvider>
        <OverlayContentProvider>
          <NoteProvider>
            <App />
          </NoteProvider>
        </OverlayContentProvider>
      </ColorSchemeProvider>
    </>
  );
}
