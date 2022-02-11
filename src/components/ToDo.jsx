import React from "react";
import { useNavigate } from "react-router-dom";

const ToDo = (props) => {
  const navigate = useNavigate();

  // With hooks, the old state is REPLACED by the one that triggers the event.
  // To correct that, you’ll need to copy the entire properties from the old state
  // using the spread operator (…) and override the part of it that is the new.
  const handleChange = (e) => {
    props.setCard({
      ...props.card,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let key = new Date().toLocaleString("nl");
    localStorage.setItem(JSON.stringify(props.card.id), JSON.stringify(props.card));

    props.todoList.push(props.card);
    props.setTodoList(props.todoList);
    setTimeout(resetCard, 2000);
  };

  const resetCard = () => {
    props.setCard({ id: "", title: "", description: "", tag: "" });
  };

  return (
    <div className="todo-card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          value={props.card.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          type="text"
          id="description"
          name="description"
          value={props.card.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          id="tag"
          name="tag"
          value={props.card.tag}
          onChange={handleChange}
          placeholder="Tag(s)"
        />
        <button id="submit-btn" type="submit" onClick={handleSubmit}>
          Submit To Do
        </button>
        <button className="nav-button" onClick={() => navigate("/todooverview")}>
          To Do Overview
        </button>
        <button className="nav-button" onClick={() => navigate("/")}>
          Back to homepage
        </button>
      </form>
    </div>
  );
};

export default ToDo;
