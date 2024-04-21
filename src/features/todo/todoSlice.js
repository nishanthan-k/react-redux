import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, task: "Redux" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    
    addToDo: (state, action) => {
      const isUniqueTask = state.todos.every(
        (todo) => todo.task !== action.payload.task
      );

      if (isUniqueTask) {
        const todo = {
          id: nanoid(),
          task: action.payload.task,
        };
        const updatedToDos = [...state.todos, todo];
        
        return {
          ...state,
          todos: updatedToDos,
        };
      }

      return state;
    },
    removeToDo: (state, action) => {
      const updateToDos = state.todos.filter((todo) => todo.id !== action.payload.id)

      return {...state, todos: updateToDos}
    },
  },
});

export const { addToDo, removeToDo } = todoSlice.actions;

export default todoSlice.reducer;
