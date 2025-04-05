import './App.css';
import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

type inputEvent = React.ChangeEvent<HTMLInputElement>;
type formEvent = React.SyntheticEvent<HTMLFormElement>;

const TODOS = [
  { id: Date.now() + 1, text: 'React' },
  { id: Date.now() + 2, text: 'JavaScript' },
  { id: Date.now() + 3, text: 'Redux' },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const [text, setText] = useState<string>('');

  const createTodo = () => {
    if (!text) return;
    setTodos([...todos, { id: Date.now(), text }]);
    setText('');
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <header className="header">
        <h1>Todo List using React+Redux+Typescript</h1>
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

          <button className="formButton" onClick={createTodo}>
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
                  onClick={() => deleteTodo(todo.id)}
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
