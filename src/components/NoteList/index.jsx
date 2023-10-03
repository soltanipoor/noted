import NoteCard from "./NoteCard";
import { useContext, useState } from "react";
import { noteContext } from "@/providers/NoteProvider";
import "./NoteList.css";
import { Link, useParams } from "react-router-dom";

function NoteList() {
  const { noteId } = useParams();
  const { notes } = useContext(noteContext);

  return (
    <div id="note-list">
      <h2 className="note-list-title">همه یادداشت‌ها</h2>
      {notes.map((note) => {
        return (
          <Link to={`/note/${note.id}`} key={note.id}>
            <NoteCard
              selected={note.id == noteId}
              {...note}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default NoteList;
