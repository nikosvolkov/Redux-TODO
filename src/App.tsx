import { useDispatch } from 'react-redux';
import './App.css';
import { useState } from 'react'
import Header from './components/Header/Header';
import InputForm from './components/InputForm/InputForm';
import TodoList from './components/TodoList/TodoList';
import { addTodo } from './redux/store/todoSlice';

function App() {

  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (!text) return;
    dispatch(addTodo({text}));
    setText('');
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
          <TodoList
          />
      </main>
    </>
  );
}

export default App;
