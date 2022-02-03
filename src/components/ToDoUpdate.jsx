import { useNavigate } from "react-router-dom";

const ToDoUpdate = () => {
  const navigate = useNavigate();

  const getOneTodo = (props) => {
    let cards = props.todoList;
    let keys = Object.keys(localStorage);
    let i = keys.length;
    let cardKey = props.key
  }
    const handleSubmit = (e) => {
      e.preventDefault()

    }

  //   if 

  //   localStorage.setItem(key, 'New Value')


  //   if (i = cards[i]) {
  //     cards.push(JSON.parse(localStorage.getItem(keys[i])));
  //   }
  //   return cards;
  // };

  return (
    <div className="update-page">
      <button id="submit-btn" type="submit" onClick={handleSubmit}>
          Submit To Do
      </button>
        <button className="nav-button" onClick={() => navigate("/todooverview")}>
          To Do Overview
        </button>
        <button className="nav-button" onClick={() => navigate("/")}>
          Back to homepage
        </button>
    </div>
  );
};

export default ToDoUpdate;
