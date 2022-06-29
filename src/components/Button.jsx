//imr
import React from 'react'
import './Button.css'

//sfc
const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="add-task-button">
      {children}
    </button>
  )
}

export default Button
