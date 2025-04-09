import { useDispatch } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  addTodo,
  removeTodo,
  toggleCompleteTodo,
} from './redux/actions/todoActions';
import { todo } from './redux/reducers/todoReducer';
import Header from './components/Header/Header';
import InputForm from './components/InputForm/InputForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((store: todo[]) => store);
  const [text, setText] = useState<string>('');

  const handleAddTodo = () => {
    if (!text) return;
    dispatch(addTodo(text));
    setText('');
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleCompleteTodo = (id: number) => {
    dispatch(toggleCompleteTodo(id));
  };

  return (
    <>
      <Header />
      <main>
        <InputForm
          text={text}
          setText={setText}
          handleAddTodo={handleAddTodo}
        />
        {todos.length ? (
          <TodoList
            todos={todos}
            handleRemoveTodo={handleRemoveTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        ) : (
          <p>Список задач пуст</p>
        )}
      </main>
    </>
  );
}

export default App;
