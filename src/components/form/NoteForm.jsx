import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import TextInput from './TextInput';
import ListTextInput from './ListTextInput';
import TagList from '../TagList';
import Divider from '../Divider';
import StylePicker from './StylePicker';
import Button from '../Button';
import SaveIcon from '../icons/SaveIcon';
import CancelIcon from '../icons/CancelIcon';
import DeleteIcon from '../icons/DeleteIcon';
import { useNotes } from '../../contexts/note-context';
import { useOverlayContent } from '../../contexts/overlay-context';
import styles from './styles';

const DEFAULT_NOTE = { name: 'New Note', text: '', tags: [], style: styles[0] ?? {} };

const NoteForm = ({ note: openedNote }) => {
  const generateNote = () => ({ ...DEFAULT_NOTE, id: uuidv4() });
  const initialState = openedNote ?? generateNote();
  const [note, setNote] = useState(initialState);

  const setProperty = (property, value) => {
    setNote((previousNote) => ({ ...previousNote, [property]: value }));
  };

  const { dispatch: dispatchNote } = useNotes();
  const { dispatch: dispatchOverlay } = useOverlayContent();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatchNote({ type: 'write', payload: note });
    dispatchOverlay({ type: 'hide', payload: { component: NoteForm } });
  };

  const onClickDelete = () => {
    dispatchNote({ type: 'delete', payload: note });
    dispatchOverlay({ type: 'hide', payload: { component: NoteForm } });
  };

  return (
    <form className={`flex flex-col space-y-2 h-full rounded-lg transition-colors bg-${note.style.bg} text-${note.style.text}`} onSubmit={onSubmit}>
      <section className="flex-grow p-4 flex flex-col space-y-2">
        <TextInput
          value={note.name}
          defaultValue={initialState.name}
          setValue={(value) => setProperty('name', value)}
          className={`text-5xl font-black w-full bg-transparent placeholder-${note.style.text} placeholder-opacity-60`}
        />
        <ListTextInput
          value={note.tags}
          defaultValue={initialState.tags}
          setValue={(value) => setProperty('tags', value)}
          className={`text-lg font-medium w-full bg-transparent placeholder-${note.style.text} placeholder-opacity-60`}
        />
        <TagList tags={note.tags} />
        <Divider style={`border-${note.style.text} border-opacity-40`} />
        <textarea
          name="content"
          id="content"
          value={note.text}
          placeholder="Tap to start typing !"
          className={`resize-none p-2 w-full flex-grow bg-transparent font-medium placeholder-${note.style.text} placeholder-opacity-60`}
          onChange={(event) => setProperty('text', event.target.value)}
        />
      </section>
      <section className="space-y-4 bg-white rounded-lg p-4">
        <StylePicker
          value={note.style}
          setValue={(value) => setProperty('style', value)}
          styles={styles}
          className="flex flex-row justify-around w-full py-4"
        />
        <div className="flex flex-row justify-between">
          <Button className="bg-gray-400 left-8" onClick={() => dispatchOverlay({ type: 'hide', payload: { component: NoteForm } })}>
            <CancelIcon className="h-10 w-10 text-white mx-auto" width={2} />
          </Button>
          {openedNote ? (
            <Button className="bg-red-400 mx-auto" onClick={onClickDelete}>
              <DeleteIcon className="h-10 w-10 text-white mx-auto" width={2} />
            </Button>
          ) : null}
          <Button className="bg-blue-400 right-8" type="submit">
            <SaveIcon className="h-10 w-10 text-white mx-auto" width={2} />
          </Button>
        </div>
      </section>
    </form>
  );
};

NoteForm.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    style: PropTypes.shape({ bg: PropTypes.string, text: PropTypes.string }),
  }),
};

NoteForm.defaultProps = {
  note: null,
};

export default NoteForm;
