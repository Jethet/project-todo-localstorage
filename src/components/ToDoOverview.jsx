import { useState, useEffect} from "react";
import ToDo from "./ToDo";

const ToDoOverview = () => {
  const [todoList, setTodoList] = useState([]);

  const getTodoStorage = () => {
    let cards = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      cards.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    return cards;
  };

  useEffect(() => {
    setTodoList(getTodoStorage());
  }, []);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="overview">
      <h1>Get all To Do cards in the overview</h1>
      <div className="card-list">
        {todoList.map((card, index) => {
          return (
            <div className="overview-card" key={index}>
              <p>Title: {card.title}</p>
              <p>Description: {card.description}</p>
              <p>Tags: {card.tag}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoOverview;
