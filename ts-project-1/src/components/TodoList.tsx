import { Todo } from "../model/todo";
import { SingleTodo } from "./SingleTodo";

interface Props {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = ({ todo, setTodo }: Props) => {
  return (
    <div className="todos">
      {todo.map((item) => (
        <SingleTodo todo={item} key={item.id} todos={todo} setTodo={setTodo} />
      ))}
    </div>
  );
};
