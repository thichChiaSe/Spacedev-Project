import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ToDoList } from "./components/todoList";
import { Contact } from "./pages/contact";
import { Register } from "./pages/register";

// const Store = "TO_DO_APP";
function App() {
  //lưu giá trị vào localstorage
  // const [todo, setTodo] = useState(() => {
  //   let list = localStorage.getItem(Store);
  //   if (list) {
  //     return JSON.parse(list);
  //   }
  //   return [];
  // });
  // useEffect(() => {
  //   localStorage.setItem(Store, JSON.stringify(todo));
  // }, [todo]);

  // const onAdd = (name) => {
  //   const task = {
  //     id: Date.now(), // lấy thời gian thực
  //     name,
  //     isComplete: false,
  //   };
  //   setTodo([...todo, task]);
  // };
  // const onRemove = (id) => {
  //   const task = [...todo].filter((e) => e.id !== id);
  //   setTodo(task);
  // };
  // const onCompleted = (id) => {
  //   const task = todo.find((e) => e.id === id);
  //   if (task) {
  //     task.isComplete = true;
  //     setTodo([...todo]);
  //   }
  // };
  return (
    <>
      {/* {console.log(todo)}
      <ToDoList
        todoList={todo}
        onAdd={onAdd}
        onRemove={onRemove}
        onCompleted={onCompleted}
      /> */}
      <Header />
      <Register />
      <Footer />
    </>
  );
}

export default App;
