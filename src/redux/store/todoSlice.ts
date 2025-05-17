import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialTodos: Todo[] = [
  { id: nanoid(12), text: 'React', completed: false },
  { id: nanoid(12), text: 'JavaScript', completed: false },
  { id: nanoid(12), text: 'Redux', completed: false },
];

const initialState: TodoState = {
  todos: initialTodos,
};

interface AddTodoType {
  text: string;
}

interface IdTodoType {
  id: string;
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(store, action: PayloadAction<AddTodoType>) {
      store.todos.push({
        id: nanoid(12),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(store, action: PayloadAction<IdTodoType>) {
      store.todos = store.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo(store, action: PayloadAction<IdTodoType>) {
      const toggledTodo = store.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
