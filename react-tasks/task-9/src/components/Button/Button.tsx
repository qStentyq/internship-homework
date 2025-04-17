import React from 'react'

type BtnProps = {
    onClickCustom:  React.MouseEventHandler<HTMLButtonElement>
    text: string,
    color: string
}

function Button({onClickCustom, text, color = 'blue'} : BtnProps) {


  return (
    <button onClick={onClickCustom} style={{color: color}}>{text}
   </button>
  )
}

export default Button