import React, { useEffect, useState } from "react";
import axios from "axios";
import './Update.css';
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [input, setInput] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setInput(localStorage.getItem("input"));
  }, []);
  const Edithandler = (e) => {
    e.preventDefault();
    axios
      .put(`https://64d21ff5f8d60b1743618014.mockapi.io/crud/todolist/${id}`, {
        input,
      })
      .then(() => navigate("/read"));
  };
  return (
    <div className="update-main">
      <form>
        <lable>Edit something:</lable>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={Edithandler}>
          Update
        </button>
        <Link to="/read">
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Update;
