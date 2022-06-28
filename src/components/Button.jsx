//imr
import React from 'react'
import './Button.css'

//sfc
const Button = ({ children, onClick }) => {
  return (
    <button className="add-task-button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
