import './App.css';
import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>('');

  const createTodo = () => {
    setTodos([...todos, { id: Date.now(), text }]);
    setText('')
  };

  const deleteTodo = (id:number)=>{
    setTodos(todos.filter(todo=>todo.id !== id))
  } 

  return (
    <>
      <header className="header">
        <h1>Todo List using React+Redux+Typescript</h1>
      </header>
      <main>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
          className='formInput'
            type="text"
            placeholder="Текст задачи"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button className='formButton' onClick={createTodo}>Создать</button>
        </form>

        <ul className="list">
          {todos.map((todo) => (
            <li className="listItem">
              <input type="checkbox" className='listCheckbox'/>
              <p>{todo.text}</p>
              <button className="listDelete" onClick={()=>deleteTodo(todo.id)}>X</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
