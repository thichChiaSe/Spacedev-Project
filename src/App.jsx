import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Contact } from "./pages/contact";
import { Course } from "./pages/course";
import { Home } from "./pages";
import { Register } from "./pages/register";
import { Team } from "./pages/team";
import { Project } from "./pages/project";
import { FAQ } from "./pages/faq";
import { Payment } from "./pages/payment";
import { Coin } from "./pages/coin";
import { SignIn } from "./pages/auth/signin";
import { SignOut } from "./pages/auth/signOut";
import { CourseDetail } from "./pages/courseDetail";
import { ResetPassword } from "./pages/auth/resetPasswrod";
import { Page404 } from "./pages/404";
import { MyProfile } from "./pages/profile";
import { ProfileLayout } from "./layout/ProfileLayout";
import { MyCourse } from "./pages/profile/myCourse";
import { MyCoin } from "./pages/profile/myCoin";
import { MyPayment } from "./pages/profile/payment";
import { MainLayout } from "./layout/MainLayout";

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
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course-detail" element={<CourseDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/profile" element={<ProfileLayout />}>
            {/* nested route */}
            <Route path="/profile/course" element={<MyCourse />} />
            <Route path="/profile/coin" element={<MyCoin />} />
            <Route path="/profile/project" element={<MyProfile />} />
            <Route path="/profile/payment" element={<MyPayment />} />
            {/* <Route path="/profile/course/course-detail" element={<CourseDetail />} /> */}
          </Route>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
