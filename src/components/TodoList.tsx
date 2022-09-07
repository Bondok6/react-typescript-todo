import { Todo } from '../model';
import './styles/style-components.css';
import SingleTodo from './SingleTodo';

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
        {todos.map((todo) => (
          <SingleTodo todo={todo} setTodos={setTodos} key={todo.id} />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {todos.map((todo) => (
          <SingleTodo todo={todo} setTodos={setTodos} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
