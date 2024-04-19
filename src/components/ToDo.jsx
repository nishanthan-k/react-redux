import React, { useState } from "react";
import { useDispatch } from "react-redux";

function ToDo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addToDoHandler = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="bg-slate-800 h-screen flex justify-center">
      <div className="max-w-xl w-3/4 h-max mt-28 flex ">
        <input
          type="text"
          name="input"
          id="input"
          className="outline-none px-2 w-5/6 "
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addToDoHandler} className="bg-purple-600 py-2 px-4">
          Create
        </button>
      </div>
    </div>
  );
}

export default ToDo;
