import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{
    id: 1,
    text: "hello world",
  }]
};

export const todoslice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      };
      state.todos.push(todo);
      return state;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      return state;
    },
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
      return state;
    }
  }
});

export const { addTodo, removeTodo, editTodo } = todoslice.actions;

export default todoslice.reducer;