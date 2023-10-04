import { useContext } from "react";
import { noteContext } from "@/providers/NoteProvider";

import "@/components/Note/Note.css";
import { useParams } from "react-router-dom";
import NoteForm from "@/components/Note/NoteForm";

function Note() {
  const { noteId } = useParams(); 
  const { notes, updateNote } = useContext(noteContext);

  const selectedNote = notes.find((n) => n.id == noteId);

  return (
    <div id="note">
      <NoteForm note={selectedNote} onUpdate={updateNote} />
    </div>
  );
}

export default Note;
