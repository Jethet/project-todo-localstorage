import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ToDoUpdate from "./ToDoUpdate";
import ToDoDelete from "./ToDoDelete";

const ToDoOverview = (props) => {
  const navigate = useNavigate();

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
    props.setTodoList(getTodoStorage());
  }, []);


  return (
    <div className="overview">
      <h1 className="overview-header">Overview of all To Do cards</h1>
      <div className="card-list">
        {props.todoList.map((card, index) => {
          return (
            <div className="overview-card" key={index}>
              <p>Title: {card.title}</p>
              <p>Description: {card.description}</p>
              <p>Tags: {card.tag}</p>
              <div className="card-buttons">
                <button className="edit-button" onClick={() => navigate("/todoupdate", {cardid: card.key})}>Update</button>
                <button className="delete-button" onClick={() => navigate("tododelete")}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="button-set">
        <button className="nav-button" onClick={() => navigate("/todo")}>Create new To Do</button>
        <button className="nav-button" onClick={() => navigate("/")}>Back to homepage</button>
      </div>
    </div>
  );
};

export default ToDoOverview;
