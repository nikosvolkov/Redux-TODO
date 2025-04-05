import { todoType } from "../actions/todoTypes";

export interface todo {
  id: number;
  text: string;
}

const initialState: todo[] = [
  { id: Date.now() + 1, text: 'React' },
  { id: Date.now() + 2, text: 'JavaScript' },
  { id: Date.now() + 3, text: 'Redux' },
];

const todoReducer = (state = initialState, action: todoType) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
      default: 
      return state
  }
};

export default todoReducer;