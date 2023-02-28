import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ToDoList } from "./components/todoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDoList />
    </>
  );
}

export default App;
