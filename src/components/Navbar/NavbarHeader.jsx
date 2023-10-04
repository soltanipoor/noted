import Logo from "@/assets/images/logo.svg";
import PlusIcon from "@/assets/images/icons/plus.svg";
import SearchIcon from "@/assets/images/icons/search.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { noteContext } from "@/providers/NoteProvider";

const NavBarHeader = () => {
  const [isShowSearchInput, setIsShowSearchInput] = useState(false);
  const { setSearchTerm } = useContext(noteContext);

  return (
    <header>
      <Link to="/">
        <img src={Logo} />
      </Link>

      <button
        className="search-button"
        onClick={() => setIsShowSearchInput(!isShowSearchInput)}
      >
        <img src={SearchIcon} />
      </button>

      {isShowSearchInput && (
        <input
          autoFocus
          className="search-input"
          placeholder="جستجو"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}

      <Link to="/note/0" className="new-note-button">
        <img src={PlusIcon} />
        یادداشت جدید
      </Link>
    </header>
  );
};

export default NavBarHeader;
