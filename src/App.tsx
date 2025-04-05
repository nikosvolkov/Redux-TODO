import { useDispatch } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { addTodo, removeTodo } from './redux/actions/todoActions';
import { todo } from './redux/reducers/todoReducer';

type inputEvent = React.ChangeEvent<HTMLInputElement>;
type formEvent = React.SyntheticEvent<HTMLFormElement>;

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

  return (
    <>
      <header className="header">
        <h1>✅Todo List✅ using React+Redux+Typescript</h1>
      </header>
      <main>
        <form action="" onSubmit={(e: formEvent) => e.preventDefault()}>
          <input
            className="formInput"
            type="text"
            placeholder="Текст задачи"
            value={text}
            onChange={(e: inputEvent) => setText(e.target.value)}
          />

          <button className="formButton" onClick={handleAddTodo}>
            Создать
          </button>
        </form>
        {todos.length ? (
          <ul className="list">
            {todos.map((todo) => (
              <li className="listItem" key={todo.id}>
                <input type="checkbox" className="listCheckbox" />
                <p>{todo.text}</p>
                <button
                  className="listDelete"
                  onClick={() => handleRemoveTodo(todo.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Список задач пуст</p>
        )}
      </main>
    </>
  );
}

export default App;
