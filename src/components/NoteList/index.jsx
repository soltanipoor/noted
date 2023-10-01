import NoteCard from "./NoteCard";
import { useContext, useState } from "react";
import { noteContext } from "@/providers/NoteProvider";
import "./NoteList.css";

function NoteList() {
  const { notes, selectedNoteId, setSelectedNoteId } = useContext(noteContext);

  return (
    <div id="note-list">
      <h2 className="note-list-title">همه یادداشت‌ها</h2>
      {notes.map((note) => {
        return (
          <NoteCard
            key={note.id}
            selected={note.id === selectedNoteId}
            onClick={() => setSelectedNoteId(note.id)}
            {...note}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
