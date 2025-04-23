import type { Route } from "./+types/home";
import { Link } from "react-router-dom";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const ROUTES = {
  ABOUT: "/internship-homework/react-tasks/task-5/about",
  POSTS: "/internship-homework/react-tasks/task-5/posts",
  HOME: "/internship-homework/react-tasks/task-5/",
};

export default function Home() {
  return (
    <>
      <div className='text-center text-3xl flex justify-center items-center h-screen flex-col max-w-7xl mx-auto'>
        <p className='text-pink-600 bold '>
          {" "}
          Welcome to the blog! In this app we gonna learn how to use
          react-router. This app has 3 pages:
        </p>
        <ul>
          <li>
            <Link to={ROUTES.ABOUT} className='text-green-500 hover:underline'>
              About
            </Link>{" "}
            - In this section you can find information about me.. and some
            contacts too
          </li>
          <li>
            <Link to={ROUTES.POSTS} className='text-purple-500 hover:underline'>
              Posts
            </Link>{" "}
            - This section has several posts to demonstrate how routing by id
            works
          </li>
          <li>
            <Link to={ROUTES.HOME} className='text-blue-500 hover:underline'>
              Home
            </Link>{" "}
            - This is a home page, a page where you read this text. If you click
            the link, your page will be reloaded and you will see this text
            again.
          </li>
        </ul>
      </div>
    </>
  );
}
