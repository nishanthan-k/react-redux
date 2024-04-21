import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoState from "./ToDoState";
import { addToDo } from "../features/todo/todoSlice";

function ToDo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addToDoHandler = (e) => {
    e.preventDefault();
    input &&dispatch(addToDo({task: input}));
    // setInput("");
  };

  return (
    <div className="bg-slate-800 h-screen flex flex-col items-center gap-10">
      <div className="max-w-xl w-3/4 h-max mt-28 flex ">
        <input
          type="text"
          name="input"
          id="input"
          value={input}
          className="outline-none px-2 w-5/6 "
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addToDoHandler} className="bg-purple-600 py-2 px-4">
          Create
        </button>
      </div>

      <TodoState />
    </div>
  );
}

export default ToDo;
