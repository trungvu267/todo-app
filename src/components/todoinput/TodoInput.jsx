import React, { useContext } from 'react'

import './todoinput.scss'


import { TodosContext, ThemeContext } from '../../config/context'


const TodoInput = ({todo,setTodo}) => {
  
  const {dispatch} = useContext(TodosContext)
  const {darkTheme} = useContext(ThemeContext)

  const handleChange = (e) =>{
    setTodo(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch({type:'ADD_TODO', todo: todo})
    setTodo('')
  }

  const theme = darkTheme ? 'box__theme--dark' : ''
  
  return (
    <form className={`box input ${theme}`} onSubmit={handleSubmit}>
      <div className="box__check">
        <div className="box__circle"></div>
      </div>
      <div className="box__text">
      <input className={`box_input ${theme}`} type="text" value={todo} placeholder='Create a new todo' onChange={handleChange}/> 

      </div>
    </form>
  )
}

export default TodoInput