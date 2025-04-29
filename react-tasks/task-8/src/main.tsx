import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./Home.tsx";
import "./App.css";
import Posts from "./modules/Posts/Posts.tsx";
import Todos from "./modules/Todo/Todos.tsx";
import { defaultPath } from "./constants.ts";
import NavButtons from "./modules/Reusable/NavButtons.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className='App'>
      <BrowserRouter basename={defaultPath}>
        <Routes>
          <Route path='/' element={<NavButtons />}>
            <Route index element={<Home />} />
            <Route path='/todos' element={<Todos />} />
            <Route path='/posts' element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
);
