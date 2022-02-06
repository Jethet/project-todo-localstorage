import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ToDoUpdate = (props) => {
  const navigate = useNavigate();
  const [card, updateCard] = useState({});

  // The card has to be loaded before it can be updated
  useEffect(() => {
    props.todoList.map((card) => {
      if (card.key === props.cardid) {
        updateCard(props.card)
        console.log(props.cardid);
      }
    })
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    updateCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="todo-card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="title"
            name="title"
            value={card.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <textarea
            type="text"
            id="description"
            name="description"
            value={card.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <input
            type="text"
            id="tag"
            name="tag"
            value={card.tag}
            onChange={handleChange}
            placeholder="Tag(s)"
          />
          <button id="submit-btn" type="submit" onClick={handleSubmit}>
            Submit To Do
          </button>
        </form>
      </div>
      <div className="update-page">
        <button className="nav-button" onClick={() => navigate("/todooverview")}>
          To Do Overview
        </button>
        <button className="nav-button" onClick={() => navigate("/")}>
          Back to homepage
        </button>
      </div>
    </div>
  );
};

export default ToDoUpdate;
