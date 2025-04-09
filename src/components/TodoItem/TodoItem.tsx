import styles from './TodoItem.module.css'
import { todo } from '../../redux/reducers/todoReducer';

interface TodoItemProps{
  todo: todo,
  handleCompleteTodo: (id: number) => void;
  handleRemoveTodo: (id: number) => void
}

const TodoItem = ({todo, handleCompleteTodo, handleRemoveTodo}: TodoItemProps) => {
  return (
    <li className={styles.listItem} key={todo.id}>
      <input
        type="checkbox"
        className={styles.listCheckbox}
        onChange={() => {
          handleCompleteTodo(todo.id);
        }}
        checked={todo.completed}
      />
      <p>{todo.text}</p>
      <button className={styles.listDelete} onClick={() => handleRemoveTodo(todo.id)}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
