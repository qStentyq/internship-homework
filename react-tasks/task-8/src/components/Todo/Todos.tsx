import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import "./Todo.css";

export default function Todos() {
  const { data, error } = useFetchData({
    dataResource: "https://jsonplaceholder.typicode.com/todos",
  });
  if (error) {
    if (error instanceof Error) {
      return <div>Error loading todos: {error.message}</div>;
    }
  }
  return (
    <div>
      <button>
        {" "}
        <Link to={`/`}>Go to Photos</Link>
      </button>
      <button>
        {" "}
        <Link to={`/posts`}>Go to Posts</Link>{" "}
      </button>
      <div>Todos list (readonly)</div>
      <div>
        {data.map(
          (todo: {
            userId: number;
            id: number;
            title: string;
            completed: boolean;
          }) => {
            return (
              <div key={todo.id} className='todo'>
                <h3>{todo.id}</h3>
                <h3>{todo.title}</h3>
                <input type='checkbox' checked={todo.completed} />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
