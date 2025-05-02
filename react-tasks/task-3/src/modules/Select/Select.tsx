import { ChangeEventHandler, ReactNode } from "react";

interface SelectProps {
  name?: string;
  id: string;
  children?: ReactNode;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  defaultVal?: number;
}

function Select({
  name = "select component",
  id,
  children,
  onChange,
  defaultVal = 0,
}: SelectProps) {
  return (
    <select name={name} id={id} defaultValue={defaultVal} onChange={onChange}>
      {children}
    </select>
  );
}

export default Select;
