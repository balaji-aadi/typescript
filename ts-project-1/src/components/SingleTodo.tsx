import { Todo } from "../model/todo";
import { FaEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const SingleTodo = ({ todo, todos, setTodo }: Props) => {
  const [isDone, setDone] = useState<boolean>(false);
  const [isInput, setIsInput] = useState<boolean>(false);
  const [todoEdit, setTodoEdit] = useState(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = () => {
    setDone(!isDone);
  };

  const handleDelete = (id: number) => {
    setTodo(todos.filter((item) => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodo(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: todoEdit } : todo))
    );
    setIsInput(false);
  };

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoEdit(e.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isInput]);

  const handleEditButton = () => {
    setIsInput(!isInput);
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleSubmit(e, todo.id)}>
      {isDone ? (
        <span className="todos__single--text">
          <del> {todo.todo} </del>
        </span>
      ) : isInput ? (
        <input
          type="text"
          value={todoEdit}
          className="todos__single--text"
          onChange={(e) => handleEdit(e)}
          ref={inputRef}
        />
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span className="icon" title="Edit">
          <FaEdit onClick={handleEditButton} />
        </span>
        <span className="icon" title="Delete">
          <RxCross2 onClick={() => handleDelete(todo.id)} />
        </span>
        <span className="icon" title="Done">
          <IoCheckmarkDoneCircleSharp onClick={handleDone} />
        </span>
      </div>
    </form>
  );
};
