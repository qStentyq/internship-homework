import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (<>
    <div className="text-center text-3xl flex justify-center items-center h-screen flex-col max-w-7xl mx-auto">
     <p className="text-pink-600 bold "> Welcome to the blog!
     In this app we gonna learn how to use react-router. This app has 3 pages:</p>
      <ul>
        <li>
            <a href="/about" className="text-green-500 hover:underline">About</a> - In this section you can find information about me..
          and some contacts too
        </li>
        <li>
          <a href="/posts" className="text-purple-500 hover:underline">Posts</a> - This section has several posts to demonstrate 
          how routing by id works
        </li>
        <li>
          <a href="/" className="text-blue-500 hover:underline">Home</a> - This is a home page, a page where you read this text. 
          If you click the link, your page will be reloaded and you will see this text again.
        </li> 
      </ul>
    </div>
  </>)
}
