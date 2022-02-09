import { useNavigate } from "react-router-dom";

const ToDoDelete = () => {
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