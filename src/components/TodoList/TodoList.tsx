import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return todos.length ? (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} id={todo.id} />
      ))}
    </ul>
  ) : (
    <p>Список дел пуст</p>
  );
};

export default TodoList;
