import React from "react";

type BtnProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  color: string;
};

function Button({ onClick, text, color = "blue" }: BtnProps) {
  const buttonStyle = { color };
  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default Button;
