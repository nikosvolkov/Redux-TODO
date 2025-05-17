import axios from 'axios';

interface TodoType {
  id: string;
  todo: string;
  completed: boolean;
  userId: string;
}

const getTodosFromApi = async ():Promise<TodoType[]> => {
  const todos = await axios.get<{todos: TodoType[]}>('https://dummyjson.com/todos');
  return todos.data.todos
};

export default getTodosFromApi