import { useContext } from "react";
import NavBarItem from "./NavBarItem";
import { Link, useParams } from "react-router-dom";
import DocIcon from "@/assets/images/icons/doc.svg";
import { noteContext } from "@/providers/NoteProvider";

function LastNotes() {
  const { noteId } = useParams();
  const { notes } = useContext(noteContext);

  const lastNotes = notes.slice(-3);

  return (
    <section className="last-notes-container">
      <h2>آخرین یادداشت‌ها</h2>

      <div className="last-notes">
        {lastNotes.map((item) => {
          return (
            <Link key={item.id} to={`/note/${item.id}`}>
              <NavBarItem
                text={item.title}
                icon={DocIcon}
                isSelected={item.id == noteId}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default LastNotes;
