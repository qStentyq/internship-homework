import useFetchData from "../../hooks/useFetchData";
import "./Todo.css";

export default function Todos() {
  const data = useFetchData({
    dataResource: "https://jsonplaceholder.typicode.com/todos",
  });
  return (
    <>
      <div> Todos list (readonly)</div>
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
    </>
  );
}
