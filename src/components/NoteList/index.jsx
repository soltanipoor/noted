import { useState } from "react";
import NoteCard from "./NoteCard";
import "./NoteList.css";

const notes = [
  {
    id: 1,
    title: "خلاصه جلسه ۱۲ صد کدرز",
    description:
      "دیزاین یه ماشین حساب رو پیاده کردیم و اومدیم لاجیک ماشین حساب رو با eval انجام دادیم",
    date: "۱۸ شهریور ۱۴۰۲",
    color: "#4C86A8",
  },
  {
    id: 2,
    title: "کتاب‌هایی که می‌خوام بخونم",
    description: "برادران کارامازوف ...",
    date: "۱ شهریور ۱۴۰۲",
    color: "#38A3A5",
  },
  {
    id: 3,
    title: "هدف من برای سال جدید",
    description: "اولین هدفم اینه که بتونم ...",
    date: "۲ فروردین ۱۴۰۲",
    color: "#8377D1",
  },
];

function NoteList() {
  const [selected, setSelected] = useState(null);

  // const handleClick = (note) => {
  //   setSelected(note.id);
  // };

  return (
    <div id="note-list">
      <h2 className="note-list-title">همه یادداشت‌ها</h2>
      {notes.map((note) => {
        return (
          <NoteCard
            key={note.id}
            selected={note.id === selected}
            onClick={() => setSelected(note.id)}
            {...note}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
