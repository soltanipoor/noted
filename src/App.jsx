import "./App.css";
import Note from "./pages/Note";
import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
import { NoteProvider } from "./providers/NoteProvider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <NoteProvider>
      <NavBar />
      <NoteList />

      <Outlet />
    </NoteProvider>
  );
}

export default App;
