import { useState } from "react";

import "./App.css";

function App() {
  const [toDos, setToDos] = useState<string[]>([]);
  const [toDoInputValue, setToDoInputValue] = useState<string>("");

  const handleAdding = () => {
    setToDos([...toDos, toDoInputValue]);
    setToDoInputValue("");
  };
  const handleDeleting = (index: number) => {
    setToDos(toDos.filter((_, i) => i !== index));
    setToDoInputValue("");
  };

  const handleEdit = (index: number) => {
    const newToDo = prompt("Edit your todo", toDos[index]);
    if (newToDo) {
      const newToDos = [...toDos];
      newToDos[index] = newToDo;
      setToDos(newToDos);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='todo'>
          <h1>ToDo List</h1>
          <div className='input_container'>
            <input
              type='text'
              placeholder='Add a new todo'
              value={toDoInputValue}
              onChange={(e) => setToDoInputValue(e.target.value)}
            />
            <button onClick={handleAdding}>Add</button>
          </div>
          <ul className='todo_list'>
            {toDos.map((todo, index) => (
              <li key={index} className='todo_item'>
                <span className='todo_checkbox_item'>
                  <input type='checkbox' />
                  <p>{todo}</p>
                </span>
                <span className='buttons_todo_item'>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDeleting(index)}>
                    Delete
                  </button>{" "}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
