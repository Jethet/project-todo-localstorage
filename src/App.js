import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ToDoOverview from "./components/ToDoOverview";
import ToDoUpdate from "./components/ToDoUpdate"
import ToDoDelete from "./components/ToDoDelete"
import ToDo from "./components/ToDo";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/todooverview" element={<ToDoOverview />} />
        <Route path="/todoupdate" element={<ToDoUpdate />} />
        <Route path="/tododelete" element={<ToDoDelete />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
