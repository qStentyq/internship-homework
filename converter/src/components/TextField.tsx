import React, { HTMLInputTypeAttribute } from 'react';
import { TextField, TextFieldVariants } from '@mui/material';

//ARCHIVED COMPONENT DO NOT USE
interface InputTextProps {
  variant: TextFieldVariants;
  type: HTMLInputTypeAttribute;
  name: string;
  id: string;
  value: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTextField: React.FC<InputTextProps> = ({
  variant = 'standard',
  type = 'number',
  name,
  id,
  value,
  onChange,
}) => {
  return (
    <TextField
      variant={variant}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputTextField;
