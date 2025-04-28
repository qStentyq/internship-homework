import { ChangeEvent, useState } from "react"
import "./App.css"

function App() {
  const [toDos, setToDos] = useState<string[]>([]);
  const [toDoInputValue, setToDoInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isEditableMode, setIsEditableMode] = useState<number>(-1);
  const [editableValue, setEditableValue] = useState<string[]>([]);

  const handleAdding = () => {
    if (toDoInputValue.trim() === "") {
      setErrorMessage("Please enter a ToDo task.");
      return;
    }
    if (toDos.includes(toDoInputValue)) {
      setErrorMessage("This ToDo already exists.");
      return;
    }
    setToDos([...toDos, toDoInputValue.slice(0, 58)]);
    setToDoInputValue("");
  };
  const handleDeleting = (index: number) => {
    setToDos(toDos.filter((_, i) => i !== index));
    setToDoInputValue("");
  };

  const handleEdit = (index: number, newToDo: string ) => {
    // const newToDo = prompt("Edit your todo", toDos[index]);
    // const newTodo = 
    if (newToDo) {
      const newToDos = [...toDos];
      newToDos[index] = newToDo;
      setToDos(newToDos);
      setEditableValue([]);
      setIsEditableMode(-1);
    }
  };

  const handleOnChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("");
    const value = e.target.value;
    if (value.length > 58) {
      setErrorMessage("Max length of todo task text reached.");
      return;
    }
    setToDoInputValue(value);
  }

  const updateEditableValue = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedValues = [...editableValue]; updatedValues[index] = e.target.value; setEditableValue(updatedValues)
  }


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
              onChange={handleOnChangeInputValue}
              
              />
            <button onClick={handleAdding}>Add</button>
          </div>
              {errorMessage && <p className='error_message'>{errorMessage}</p>}
          <ul className='todo_list'>
            {toDos.map((todo, index) => (
              <li key={index} className='todo_item'>
                <div className='todo_checkbox_item'>
                  <input type='checkbox' />
                  {isEditableMode === index ? (
                    <input type='text' value={editableValue[index] ? editableValue[index] : todo} onChange={(e) => updateEditableValue(e, index)} onBlur={() => handleEdit(index, editableValue[index])}
                    onKeyDown={(e) => e.key === 'Enter' && handleEdit(index, editableValue[index])}/>
                  ) : (
                    <>
                    {todo}
                    </>
                  )}
                </div>
                <div className='buttons_todo_item'>
                  {isEditableMode === index ? (
                    <button onClick={() => setIsEditableMode(-1)}>Cancel</button>
                  ) : (
                    <button onClick={() => {setIsEditableMode( index); }}>Edit</button>) }
                  
                  <button onClick={() => handleDeleting(index)}>
                    Delete
                  </button>{" "}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
