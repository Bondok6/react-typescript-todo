import { Todo } from '../model';
import './styles/style-components.css';
import SingleTodo from './SingleTodo';

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo todo={todo} setTodos={setTodos} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
