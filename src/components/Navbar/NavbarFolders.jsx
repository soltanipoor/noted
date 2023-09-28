import folderIcon from "@/assets/images/icons/folder.svg";
import NewFolderIcon from "@/assets/images/icons/new-folder.svg";
import OpenFolderIcon from "@/assets/images/icons/open-folder.svg";
import NavBarItem from "./NavBarItem";
import { useEffect, useState } from "react";
import Button from "../UI/Button";

const initialFolders = [
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
  const [isShowNewFolder, setIsShowNewFolder] = useState(false);
  const [newFolderValue, setNewFolderValue] = useState();
  const [folders, setFolders] = useState(initialFolders);

  const handleNewFolder = () => {
    setIsShowNewFolder(true);
  };

  const handleCancelNewFolder = () => {
    setIsShowNewFolder(false);
  };

  const handleCreateFolder = () => {
    setFolders([{ name: newFolderValue }, ...folders]);
    setNewFolderValue(null);
    setIsShowNewFolder(false);
  };

  const handleChangeInput = (event) => {
    setNewFolderValue(event.target.value);
  };

  useEffect(() => {
    const handleClick = (event) => {
      const isClickInForm = event.target.closest(".nav-bar-new-folder,header");

      if (!isClickInForm) {
        setIsShowNewFolder(false);
      }
    };

    if (isShowNewFolder) {
      setTimeout(() => {
        document.body.addEventListener("click", handleClick);
      }, 0)
    }

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [isShowNewFolder]);

  return (
    <section className="folders-container">
      <header>
        <h2>پوشه‌ها</h2>
        <button className="new-folder-button" onClick={handleNewFolder}>
          <img src={NewFolderIcon} />
        </button>
      </header>

      <div className="folders">
        {isShowNewFolder && (
          <form className="nav-bar-new-folder" onSubmit={handleCreateFolder}>
            <img src={folderIcon} />
            <input
              autoFocus
              type="text"
              placeholder="نام پوشه"
              onChange={handleChangeInput}
            />
            <Button variant="blue" type="submit">
              ok
            </Button>
            <Button onClick={handleCancelNewFolder} variant="red">
              cancel
            </Button>
          </form>
        )}

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
