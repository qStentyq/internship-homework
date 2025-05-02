import React, { ChangeEvent } from "react";
import Select from "../Select/Select";
import { toDoTask } from "../../App";

interface ToDoItem {
  toDos: toDoTask[];
  isEditableMode: number;
  editableValue: string[];
  updateEditableValue: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleEdit: (index: number, value: string) => void;
  updateEditablePriority: (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void;
  setIsEditableMode: (index: number) => void;
  handleDeleting: (index: number) => void;
}

function ToDoItem({
  toDos,
  isEditableMode,
  editableValue,
  updateEditableValue,
  handleEdit,
  updateEditablePriority,
  setIsEditableMode,
  handleDeleting,
}: ToDoItem) {
  return (
    <>
      {toDos.map((todo, index) => (
        <li key={index} className={`todo_item priority_style_${todo.priority}`}>
          <div className='todo_checkbox_item'>
            <input type='checkbox' />
            {isEditableMode === index ? (
              <>
                <input
                  type='text'
                  autoFocus
                  size={todo.value.length}
                  value={
                    editableValue[index] ? editableValue[index] : todo.value
                  }
                  onChange={(e) => updateEditableValue(e, index)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleEdit(index, editableValue[index])
                  }
                />
                <Select
                  id='priorityUpdate'
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    updateEditablePriority(e, index)
                  }>
                  <option> Choosee an option..</option>
                  {Array.from({ length: 5 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </Select>
              </>
            ) : (
              <span>{todo.value}</span>
            )}
          </div>
          <div className='buttons_todo_item'>
            {isEditableMode === index ? (
              <button onClick={() => handleEdit(index, editableValue[index])}>
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsEditableMode(index);
                }}>
                Edit
              </button>
            )}
            <button onClick={() => handleDeleting(index)}>Delete</button>{" "}
          </div>
        </li>
      ))}
    </>
  );
}

export default ToDoItem;
