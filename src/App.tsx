import { useState } from 'react';
import './App.css';
import { Todo } from './model';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';

const App = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent, todo: string) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  return (
    <div className="app">
      <h1 className="heading">Todos</h1>
      <InputFeild todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
