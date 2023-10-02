import NoteForm from "./NoteForm";
import { useContext } from "react";
import EmptyNote from "./EmptyNote";
import { noteContext } from "@/providers/NoteProvider";

import "./Note.css";

function Note() {
  const { notes, selectedNoteId, updateNote } = useContext(noteContext);

  const selectedNote = notes.find((n) => n.id === selectedNoteId);

  return (
    <div id="note">
      {selectedNoteId == 0 || selectedNote ? (
        <NoteForm note={selectedNote} onUpdate={updateNote} />
      ) : (
        <EmptyNote />
      )}
    </div>
  );
}

export default Note;
