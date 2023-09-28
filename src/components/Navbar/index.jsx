import NavBarHeader from "./NavbarHeader";
import NavbarFolders from "./NavbarFolders";
import NavbarLastNotes from "./NavbarLastNotes";

import "./NavBar.css";

function NavBar() {
  return (
    <div id="nav-bar">
      <NavBarHeader />
      
      <NavbarLastNotes />

      <NavbarFolders />
    </div>
  );
}

export default NavBar;
