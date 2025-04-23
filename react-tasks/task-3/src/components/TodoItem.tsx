import React from "react";

export type TodoProps = {
  todo: { id: string; text: string };
  onEdit: () => void;
  onDelete: () => void;
};

const TodoItem: React.FC<TodoProps> = ({ todo, onEdit, onDelete }) => {
  return (
    <li className='todo_item'>
      <input type='checkbox' />
      <p>{todo.text}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
