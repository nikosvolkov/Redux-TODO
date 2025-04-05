export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  payload: text,
});

export const removeTodo = (id: number) => ({
  type: 'REMOVE_TODO',
  payload: id,
});
