import folderIcon from "@/assets/images/icons/folder.svg";
import NewFolderIcon from "@/assets/images/icons/new-folder.svg";
import OpenFolderIcon from "@/assets/images/icons/open-folder.svg";
import NavBarItem from "../Navbar/NavBarItem";

const folders = [
  {
    name: "همه یاد‌داشت‌‌ها",
  },
  {
    name: "کاری",
  },
  {
    name: "مسافرت",
  },
  {
    name: "رویدادها",
  },
  {
    name: "باشگاه",
  },
];

function Folders() {
  return (
    <section className="folders-container">
      <header>
        <h2>پوشه‌ها</h2>
        <button className="new-folder-button">
          <img src={NewFolderIcon} />
        </button>
      </header>

      <div className="folders">
        {folders.map((item, i) => (
          <NavBarItem
            key={item.name}
            text={item.name}
            isSelected={i === 2}
            icon={i === 2 ? OpenFolderIcon : folderIcon}
          />
        ))}
      </div>
    </section>
  );
}

export default Folders;
