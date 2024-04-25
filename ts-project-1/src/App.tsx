// const obj = {
//   first: "saturo",
//   last: "gojo",
// };

// const arr = [
//   {
//     id: 1,
//     first: "aadesh",
//     last: "balaji",
//   },
//   {
//     id: 2,
//     first: "suguru",
//     last: "geto",
//   },
//   {
//     id: 3,
//     first: "megumi",
//     last: "fushiguro",
//   },
// ];

import { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { Todo } from "./model/todo";
import { TodoList } from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <h2 className="heading">Taskify</h2>
      {/* <Props name="balaji" objs={obj} arrList={arr} />
      <Home status="Loading" />
      <Oscar>
        <Header> Oscar goes to aadesh</Header>
      </Oscar>
      <Functions /> */}
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todo={todos} setTodo={setTodos} />
    </div>
  );
};

export default App;
