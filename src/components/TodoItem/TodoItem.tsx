import { useDispatch } from 'react-redux';
import styles from './TodoItem.module.css';
import { removeTodo, Todo, toggleTodo } from '../../redux/store/todoSlice';

interface TodoItemProps{
  todo: Todo,
  id: string
}

const TodoItem = ({todo, id}: TodoItemProps) => {
  const dispatch = useDispatch()
  return (
    <li className={styles.listItem}>
      <input
        type="checkbox"
        className={styles.listCheckbox}
        onChange={() => {
          dispatch(toggleTodo({id}));
        }}
        checked={todo.completed}
      />
      <p>{todo.text}</p>
      <button className={styles.listDelete} onClick={()=>dispatch(removeTodo({id}))}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
