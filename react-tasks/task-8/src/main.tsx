import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./Home.tsx";
import "./App.css";
import Posts from "./components/Posts/Posts.tsx";
import Todos from "./components/Todo/Todos.tsx";
import { defaultPath } from "./constants.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className='App'>
      <BrowserRouter basename={defaultPath}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
);
