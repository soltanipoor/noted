import { useState } from "react";

function NoteCard({ title, description, date, color, selected, onClick }) {
  const style = {
    borderColor: color,
    backgroundColor: selected ? "white" : "#fcf1e3",
  };

  return (
    <div className="note-card" style={style} onClick={onClick}>
      <div className="note-card__title">{title}</div>
      <div className="note-card__description">{description}</div>
      <div className="note-card__date">{date}</div>
    </div>
  );
}

export default NoteCard;
