import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ToDoList } from "./components/todoList";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      name: "Cong việc a",
      isComplete: false,
    },
    {
      id: 2,
      name: "Cong việc b",
      isComplete: false,
    },
    {
      id: 3,
      name: "Cong việc c",
      isComplete: true,
    },
    {
      id: 4,
      name: "Cong việc d",
      isComplete: true,
    },
  ]);

  const onAdd = (name) => {
    const task = {
      id: Date.now(), // lấy thời gian thực
      name,
      isComplete: false,
    };
    setTodo([...todo, task]);
  };
  const onRemove = (id) => {
    console.log("id", id);
    const task = [...todo].filter((e) => e.id !== id);
    setTodo(task);
  };
  return ( 
    <>
      {console.log(todo)}
      <ToDoList todoList={todo} onAdd={onAdd} onRemove={onRemove} />
    </>
  );
}

export default App;
