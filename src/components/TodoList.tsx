import { Todo } from '../model';
import './styles/style-components.css';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: TodoListProps) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos?.map((todo, idx) => (
              <SingleTodo
                todo={todo}
                setTodos={setTodos}
                key={todo.id}
                index={idx}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? 'dragcomplete' : 'remove'
            }`}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedTodos?.map((todo, idx) => (
              <SingleTodo
                index={idx}
                todo={todo}
                setTodos={setCompletedTodos}
                key={todo.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
