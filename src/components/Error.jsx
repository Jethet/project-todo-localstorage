import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error-message">
      <p>Unfortunately this page does not exist.</p>
      <p>
        You can go back to the homepage here <button className="error-button" onClick={() => navigate("/home")}>Home</button>
      </p>
    </div>
  );
};

export default Error;
