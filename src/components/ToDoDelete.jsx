import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const ToDoDelete = (props) => {
  const navigate = useNavigate();

  // The card has to be loaded before it can be updated
  useEffect(() => {
    props.todoList
    
  }, [])
  
  const handleDelete = (id) => {
    let updatedTodos = [...props.todoList].filter((props.card) => {
    if (props.card.id !== id) {
      props.setTodoList(updatedTodos);
    }
  })
  }

  return (
    <div className="delete-page">
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
          <button id="submit-btn" type="submit" onClick={() => handleDelete(id)}>
            Delete To Do
          </button>
        </form>
      </div>
        <button className="nav-button" onClick={() => navigate("/todooverview")}>
          To Do Overview
        </button>
        <button className="nav-button" onClick={() => navigate("/")}>
          Back to homepage
        </button>
    </div>
  );
};

export default ToDoDelete