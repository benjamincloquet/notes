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
  const [note, setNote] = useState(openedNote ?? { ...DEFAULT_NOTE, id: uuidv4() });

  const setProperty = (property, value) => {
    setNote((previousNote) => ({ ...previousNote, [property]: value }));
  };

  const { dispatch: dispatchNote } = useNotes();
  const { dispatch: dispatchOverlay } = useOverlayContent();

  const onSave = (event) => {
    event.preventDefault();
    dispatchNote({ type: 'write', payload: note });
    dispatchOverlay({ type: 'hide', payload: { component: NoteForm } });
  };

  const onClickDelete = () => {
    dispatchNote({ type: 'delete', payload: note });
    dispatchOverlay({ type: 'hide', payload: { component: NoteForm } });
  };

  return (
    <form className={`flex flex-col space-y-2 h-full rounded-lg transition-colors ${note.style.form}`} onSubmit={onSave}>
      <section className="flex-grow p-4 flex flex-col space-y-2">
        <TextInput
          value={note.name}
          defaultValue={DEFAULT_NOTE.name}
          setValue={(value) => setProperty('name', value)}
          className={`text-5xl font-black w-full ${note.style.input}`}
          placeholder="Note name"
        />
        <ListTextInput
          value={note.tags}
          defaultValue={DEFAULT_NOTE.tags}
          setValue={(value) => setProperty('tags', value)}
          className={`text-lg font-medium w-full ${note.style.input}`}
          placeholder="Add a tag..."
        />
        <TagList tags={note.tags} />
        <Divider />
        <textarea
          name="content"
          id="content"
          value={note.text}
          placeholder="Tap to start typing !"
          className={`resize-none p-2 w-full flex-grow font-medium ${note.style.input}`}
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
          <Button className="bg-light-secondary-accent left-8" onClick={() => dispatchOverlay({ type: 'hide', payload: { component: NoteForm } })}>
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
    style: PropTypes.shape({ form: PropTypes.string, input: PropTypes.string }),
  }),
};

NoteForm.defaultProps = {
  note: null,
};

export default NoteForm;
