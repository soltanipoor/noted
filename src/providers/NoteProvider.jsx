import { createContext, useState } from "react";

const noteContext = createContext();

function NoteProvider({ children }) {
  const [isNewNoteMode, setIsNewNoteMode] = useState(false);

  const toggleNewNoteMode = () => {
    setIsNewNoteMode(!isNewNoteMode);
  };

  const value = {
    isNewNoteMode,
    toggleNewNoteMode,
  };

  return <noteContext.Provider value={value}>{children}</noteContext.Provider>;
}

export { NoteProvider, noteContext };
