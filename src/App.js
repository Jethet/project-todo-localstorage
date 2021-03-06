import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ToDoOverview from "./components/ToDoOverview";
import ToDoUpdate from "./components/ToDoUpdate";
import ToDoDelete from "./components/ToDoDelete";
import ToDo from "./components/ToDo";
import Error from "./components/Error";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [card, setCard] = useState({
    id: new Date().toLocaleString("nl"),
    title: "",
    description: "",
    tag: "",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route
          path="/todo"
          element={<ToDo todoList={todoList} setTodoList={setTodoList} card={card} setCard={setCard} />}
        />
        <Route path="/todooverview" element={<ToDoOverview todoList={todoList} setTodoList={setTodoList} />} />
        <Route
          exact
          path="/todoupdate/:cardid"            
          // render={(props) => (
          //   <ToDoUpdate
          //     cardid={props.match.params.cardid}
          //     todoList={todoList}
          //     setTodoList={setTodoList}
          //   />
          // )}
        />
        <Route path="/tododelete" element={<ToDoDelete todoList={todoList} setTodoList={setTodoList} card={card} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
