import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./Home.tsx";
import "./App.css";
import Posts from "./components/Posts/Posts.tsx";
import Todos from "./components/Todo/Todos.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/internship-homework/react-tasks/task-8/'
            element={<Home />}
          />
          <Route
            path='/internship-homework/react-tasks/task-8/todos'
            element={<Todos />}
          />
          <Route
            path='/internship-homework/react-tasks/task-8/posts'
            element={<Posts />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
);
