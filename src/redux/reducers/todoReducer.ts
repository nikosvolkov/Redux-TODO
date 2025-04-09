import { todoType } from '../actions/todoTypes';

export interface todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: todo[] = [
  { id: Date.now() + 1, text: 'React', completed: false },
  { id: Date.now() + 2, text: 'JavaScript', completed: false },
  { id: Date.now() + 3, text: 'Redux', completed: false },
];

const todoReducer = (state = initialState, action: todoType) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    case 'COMPLETE_TODO':
      return state.map((todo) => {
        if (todo.id !== action.payload) return todo;
        return { ...todo, completed: !todo.completed };
      });
    default:
      return state;
  }
};

export default todoReducer;
