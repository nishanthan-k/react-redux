import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, task: "Redux" }],
  inputToDo: "",
  editToDoID: null,
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
      const updateToDos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );

      return { ...state, todos: updateToDos };
    },
    editToDo: (state, action) => {
      const updatedToDos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.task };
        }
        return todo;
      });

      return {
        ...state,
        todos: updatedToDos,
      }; 
    },
    updateToDoInput: (state, action) => {
      return {
        ...state,
        inputToDo: action.payload.task,
      };
    },
    updateEditToDoID: (state, action) => {
      return {
        ...state,
        editToDoID: action.payload.id,
      };
    },
  },
});

export const {
  updateToDoInput,
  addToDo,
  removeToDo,
  editToDo,
  updateEditToDoID,
} = todoSlice.actions;

export default todoSlice.reducer;
