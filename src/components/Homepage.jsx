import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1>This is a To Do app, created with React</h1>
      <div className="button-set">
        <button className="nav-button" onClick={() => navigate("/todo")}>Create new To Do</button>
        <button className="nav-button" onClick={() => navigate("/todooverview")}>To Do Overview</button>
      </div>
    </div>
  );
};

export default Homepage;
