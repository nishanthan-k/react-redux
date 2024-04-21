import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { removeToDo } from "../features/todo/todoSlice";

function TodoState() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()

  return (
    <div className="bg-slate-200 max-w-xl w-3/4 h-max">
      {todos.map((todo) => (
        <div key={todo.id} className="bg-red-300 w-full h-9  flex items-center">
          <div className="w-1/6 px-3 justify-self-start">
            <FaRegCircle size="18" />
          </div>
          <div className="flex w-5/6 justify-between">
            <p className="w-3/4 overflow-scroll mr-1">{todo.task}</p>
            <div className="flex w-1/4 gap-5 mr-1">
              <FaEdit size="20" />
              <MdDelete size="20" onClick={() => (
                dispatch(removeToDo({id: todo.id}))
              )} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoState;
