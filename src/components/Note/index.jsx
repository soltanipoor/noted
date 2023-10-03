import NoteForm from "./NoteForm";
import { useContext } from "react";
import EmptyNote from "./EmptyNote";
import { noteContext } from "@/providers/NoteProvider";

import "./Note.css";
import { useParams } from "react-router-dom";

function Note() {
  const { noteId } = useParams();
  const { notes, updateNote } = useContext(noteContext);

  const selectedNote = notes.find((n) => n.id == noteId);

  return (
    <div id="note">
      {noteId == 0 || selectedNote ? (
        <NoteForm note={selectedNote} onUpdate={updateNote} />
      ) : (
        <EmptyNote />
      )}
    </div>
  );
}

export default Note;
