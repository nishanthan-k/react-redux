import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, editToDo, updateToDoInput, updateEditToDoID } from "../features/todo/todoSlice";
import TodoState from "./ToDoState";

function ToDo() {
  const input = useSelector((state) => state.inputToDo);
  const editToDoID = useSelector((state) => state.editToDoID);
  const buttonContext = editToDoID ? "Update" : "Create";
  const dispatch = useDispatch();

  const addToDoHandler = (e) => {
    e.preventDefault();

    if (input) {
      if (editToDoID) {
        dispatch(editToDo({ id: editToDoID, task: input }));
      } else {
        dispatch(addToDo({ task: input }));
      }
      // Reset editToDoID after adding or updating todo
      dispatch(updateEditToDoID({ id: null }));
    }
  };

  return (
    <div className="bg-slate-800 h-screen flex flex-col items-center gap-10">
      <div className="max-w-xl w-3/4 h-max mt-28 flex ">
        <input
          type="text"
          name="input"
          id="input"
          value={input || ""}
          className="outline-none px-2 w-5/6 "
          onChange={(e) => dispatch(updateToDoInput({ task: e.target.value }))}
        />
        <button onClick={addToDoHandler} className="bg-purple-600 py-2 px-4">
          {buttonContext}
        </button>
      </div>

      <TodoState />
    </div>
  );
}

export default ToDo;
