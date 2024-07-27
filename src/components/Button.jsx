import React from 'react'

const Button = ({btnClass, btnType, btnOnclick, btnlabel}) => {
  return (
    <button className={btnClass} type={btnType} onClick={btnOnclick}>{btnlabel}</button>
  )
}

export default Button
