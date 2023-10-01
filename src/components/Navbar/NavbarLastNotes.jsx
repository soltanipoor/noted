import { useContext } from "react";
import NavBarItem from "./NavBarItem";
import DocIcon from "@/assets/images/icons/doc.svg";
import { noteContext } from "@/providers/NoteProvider";


function LastNotes() {
  const { notes } = useContext(noteContext)

  const lastNotes = notes.slice(-3)

  return (
    <section className="last-notes-container">
      <h2>آخرین یادداشت‌ها</h2>

      <div className="last-notes">
        {lastNotes.map((item) => {
          return <NavBarItem key={item.id} text={item.title} icon={DocIcon} />;
        })}
      </div>
    </section>
  );
}

export default LastNotes;
