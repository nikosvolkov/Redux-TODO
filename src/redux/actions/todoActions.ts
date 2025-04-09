export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  payload: text,
});

export const removeTodo = (id: number) => ({
  type: 'REMOVE_TODO',
  payload: id,
});

export const toggleCompleteTodo = (id: number) =>({
  type: 'COMPLETE_TODO',
  payload: id
})