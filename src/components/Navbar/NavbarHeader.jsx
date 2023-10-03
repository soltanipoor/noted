import Logo from "@/assets/images/logo.svg";
import PlusIcon from "@/assets/images/icons/plus.svg";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@/assets/images/icons/search.svg";

const NavBarHeader = () => {
  const navigate = useNavigate();

  const toggleNewNoteMode = () => {
    navigate("/note/0");
  };

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
