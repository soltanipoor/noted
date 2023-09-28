import Logo from "@/assets/images/logo.svg";
import PlusIcon from "@/assets/images/icons/plus.svg";
import SearchIcon from "@/assets/images/icons/search.svg";
import { useContext } from "react";
import { noteContext } from "@/providers/NoteProvider";

const NavBarHeader = () => {
  const { toggleNewNoteMode } = useContext(noteContext);

  return (
    <header>
      <img src={Logo} />
      <button className="search-button">
        <img src={SearchIcon} />
      </button>

      <button className="new-note-button" onClick={() => toggleNewNoteMode()}>
        <img src={PlusIcon} />
        یادداشت جدید
      </button>
    </header>
  );
};

export default NavBarHeader;
