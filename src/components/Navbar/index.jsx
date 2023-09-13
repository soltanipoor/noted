import Logo from "@/assets/images/logo.svg";
import PlusIcon from "@/assets/images/icons/plus.svg";
import SearchIcon from "@/assets/images/icons/search.svg";

import Folders from "../Folders";
import LastNotes from "../LastNotes";

import "./NavBar.css";

function NavBar() {
  return (
    <div id="nav-bar">
      <header>
        <img src={Logo} />
        <button className="search-button">
          <img src={SearchIcon} />
        </button>

        <button className="new-note-button">
          <img src={PlusIcon} />
          یادداشت جدید
        </button>
      </header>

      <LastNotes />

      <Folders />
    </div>
  );
}

export default NavBar;
