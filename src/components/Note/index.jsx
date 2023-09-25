import { useState } from "react";
import EmptyNote from "./EmptyNote";
import "./Note.css";
import NoteForm from "./NoteForm";

function Note() {
  const [showNoteForm, setShowNoteForm] = useState(true)

  return (
    <div id="note">
      {showNoteForm ? <NoteForm/> : <EmptyNote />}
    </div>
  );
}

export default Note;
