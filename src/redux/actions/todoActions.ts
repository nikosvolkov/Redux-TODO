import { actionTypes } from './types/actionTypes';

export const addTodo = (text: string) => ({
  type: actionTypes.ADD_TODO,
  payload: text,
});

export const removeTodo = (id: number) => ({
  type: actionTypes.REMOVE_TODO,
  payload: id,
});

export const toggleCompleteTodo = (id: number) =>({
  type: actionTypes.COMPLETE_TODO,
  payload: id
})