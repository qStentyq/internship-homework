import { ChangeEvent, useState } from "react";
import "./App.css";
import ToDoItem from "./modules/Todos/ToDoItem";
import InputContainer from "./modules/InputContainer/InputContainer";

export interface toDoTask {
  value: string;
  priority: number;
}

function App() {
  const [toDos, setToDos] = useState<toDoTask[]>([]);
  const [toDoInputValue, setToDoInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isEditableMode, setIsEditableMode] = useState<number>(-1);
  const [editableValue, setEditableValue] = useState<string[]>([]);
  const [priorityLvl, setPriorityLvl] = useState(5);
  const [editablePriority, setEditablePriority] = useState<number[]>([]);

  // console.debug(priorityLvl);
  // console.debug(toDos);

  const handleAdding = () => {
    const isLonger = toDoInputValue.length;
    if (toDoInputValue.trim() === "") {
      setErrorMessage("Please enter a ToDo task.");
      return;
    }
    const setValue =
      isLonger > 50 ? `${toDoInputValue.slice(0, 50)}...` : toDoInputValue;
    setToDos(sortTodos([...toDos, { value: setValue, priority: priorityLvl }]));
    setToDoInputValue("");
  };
  const handleDeleting = (index: number) => {
    setToDos(sortTodos(toDos.filter((_, i) => i !== index)));
    setToDoInputValue("");
  };

  const handleEdit = (index: number, newToDo: string) => {
    const newToDos = [...toDos];
    if (newToDo) {
      const isLonger = newToDo.length;
      newToDos[index].value = isLonger > 50 ? `${newToDo}...` : newToDo;
    }
    // console.debug(editablePriority);
    if (editablePriority[index]) {
      newToDos[index].priority = editablePriority[index];
    }
    setToDos(sortTodos(newToDos));
    setEditableValue([]);
    setEditablePriority([]);
    setIsEditableMode(-1);
  };

  const handleOnChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("");
    const value = e.target.value;
    if (value.length > 50) {
      setErrorMessage("Max length of todo task text reached.");
      return;
    }
    setToDoInputValue(value);
  };

  const updateEditableValue = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedValues = [...editableValue];
    updatedValues[index] = e.target.value;
    setEditableValue(updatedValues);
  };

  const updateEditablePriority = (
    e: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const updatedValues = [...editablePriority];
    updatedValues[index] = Number(e.target.value);
    setEditablePriority(updatedValues);
  };

  const sortTodos = (todoArray: toDoTask[]) => {
    return [...todoArray].sort((a, b) => a.priority - b.priority);
  };

  return (
    <>
      <div className='container'>
        <div className='todo'>
          <h1>ToDo List</h1>
          <InputContainer
            toDoInputValue={toDoInputValue}
            handleAdding={handleAdding}
            handleOnChangeInputValue={handleOnChangeInputValue}
            setPriorityLvl={setPriorityLvl}
          />
          {errorMessage && <p className='error_message'>{errorMessage}</p>}
          <ul className='todo_list'>
            <ToDoItem
              toDos={toDos}
              isEditableMode={isEditableMode}
              editableValue={editableValue}
              updateEditableValue={updateEditableValue}
              handleEdit={handleEdit}
              updateEditablePriority={updateEditablePriority}
              setIsEditableMode={setIsEditableMode}
              handleDeleting={handleDeleting}
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
