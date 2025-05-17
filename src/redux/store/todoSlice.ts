import { todoAction } from '../actions/types/actionTypes';
import { actionTypes } from '../actions/types/actionTypes';

export interface todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number
}

const initialState: todo[] = [
  { id: Date.now() + 1, todo: 'React', completed: false, userId: 1 },
  { id: Date.now() + 2, todo: 'JavaScript', completed: false, userId: 1 },
  { id: Date.now() + 3, todo: 'Redux', completed: false, userId: 1 },
];

const todoReducer = (state = initialState, action: todoAction) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        { id: Date.now(), todo: action.payload, completed: false },
      ];
    case actionTypes.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case actionTypes.COMPLETE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.payload) return todo;
        return { ...todo, completed: !todo.completed };
      });
    default:
      return state;
  }
};

export default todoReducer;
