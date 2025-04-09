export enum actionTypes {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  COMPLETE_TODO = 'COMPLETE_TODO',
}

interface AddTodo {
  type: actionTypes.ADD_TODO;
  payload: string;
}

interface RemoveTodo {
  type: actionTypes.REMOVE_TODO;
  payload: number;
}

interface ToggleCompleteTodo {
  type: actionTypes.COMPLETE_TODO;
  payload: number;
}

export type todoAction = AddTodo | RemoveTodo | ToggleCompleteTodo;
