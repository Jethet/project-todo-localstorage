import { useNavigate } from "react-router-dom";

const ToDoDelete = () => {
  const navigate = useNavigate();

  

  return (
    <div className="update-page">
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