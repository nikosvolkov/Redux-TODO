import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
import { todo } from '../../redux/reducers/todoReducer';

interface TodoListType {
  todos: todo[];
  handleCompleteTodo: (id: number) => void;
  handleRemoveTodo: (id: number) => void;
}

const TodoList = ({
  todos,
  handleCompleteTodo,
  handleRemoveTodo,
}: TodoListType) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          handleCompleteTodo={handleCompleteTodo}
          handleRemoveTodo={handleRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
