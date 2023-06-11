import React from 'react'

const Form = ({className, onSubmit, children}) => {
  return (
    <form noValidate onSubmit ={onSubmit} className={`form ${className || ""}`}>{children}</form>
  )
}

export default Form