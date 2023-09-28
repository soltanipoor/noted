import NoteForm from "./NoteForm";
import { useContext } from "react";
import EmptyNote from "./EmptyNote";
import { noteContext } from "@/providers/NoteProvider";

import "./Note.css";

function Note() {
  const { isNewNoteMode } = useContext(noteContext);

  return <div id="note">{isNewNoteMode ? <NoteForm /> : <EmptyNote />}</div>;
}

export default Note;
