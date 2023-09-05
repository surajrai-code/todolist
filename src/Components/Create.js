import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Create = () => {
  const [input, setInput] = useState("");
  let navigate = useNavigate();
  const submithandler = (e) => {
    e.preventDefault();
    axios
      .post("https://64d21ff5f8d60b1743618014.mockapi.io/crud/todolist", {
        input,
      })
      .then(() => navigate("/read"));
  };
  return (
    <div>
      <Link to="/read">
        <button>ShowData</button>
      </Link>
      <form>
        <lable>Add something:</lable>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={submithandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
