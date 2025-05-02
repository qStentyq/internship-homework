import { ChangeEvent } from "react";
import Select from "../Select/Select";

interface InputContainerProps {
  toDoInputValue: string;
  handleAdding: () => void;
  handleOnChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  setPriorityLvl: (level: number) => void;
}

function InputContainer({
  toDoInputValue,
  handleAdding,
  handleOnChangeInputValue,
  setPriorityLvl,
}: InputContainerProps) {
  return (
    <div className='input_container'>
      <input
        className='input_adding_todo'
        type='text'
        placeholder='Add a new todo'
        value={toDoInputValue}
        onKeyDown={(e) => e.key === "Enter" && handleAdding()}
        onChange={handleOnChangeInputValue}
      />
      <label htmlFor=''>Add priority level</label>
      <Select
        defaultVal={5}
        id='priority select'
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setPriorityLvl(Number(e.target.value))
        }>
        {Array.from({ length: 5 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </Select>
      <button onClick={handleAdding}>Add</button>
    </div>
  );
}

export default InputContainer;
