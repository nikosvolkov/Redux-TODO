interface addTodo {
  type: 'ADD_TODO';
  payload: string;
}

interface removeTodo {
  type: 'REMOVE_TODO';
  payload: number;
}

export type todoType = addTodo | removeTodo;