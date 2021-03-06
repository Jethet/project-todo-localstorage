import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ToDoDelete = (props) => {
  const navigate = useNavigate();

  // The card has to be loaded before it can be deleted
  useEffect(() => {
    props.todoList.map((item) => {
      if (item.id === props.card.id) {
        props.setCard(props.card);
        console.log(props.card);
      }
    });
  }, []);

  const deleteCard = () => {
    let updatedTodos = [...props.todoList].filter((item) => {
      if (props.card.id !== item.id) {
        props.setTodoList(updatedTodos);
      }
    });
  };

  return (
    <div className="delete-page">
      <div className="todo-card">
        <form>
          <input
            type="text"
            id="title"
            name="title"
            value={props.card.title}
          />
          <textarea
            type="text"
            id="description"
            name="description"
            value={props.card.description}
          />
          <input
            type="text"
            id="tag"
            name="tag"
            value={props.card.tag}
          />
          <p>Are you sure you want to delete this to do?</p>
          <button id="submit-btn" type="submit" onClick={() => deleteCard()}>
            Delete To Do
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

export default ToDoDelete;
