import { useState, useRef, useEffect } from 'react';
import { Todo } from '../model';
import './styles/style-components.css';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

interface SingleTodoProps {
  todo: Todo;

  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, setTodos }: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const handleEditTodo = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, todo: newTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    }
  }, [edit]);

  return (
    <form
      className="todos__single"
      onSubmit={(e) => handleEditTodo(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span className="icon" onClick={() => handleEdit()}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
