import React,{useContext} from 'react'

import './todo.scss'
import check from '../../images/icon-check.svg'
import cross from '../../images/icon-cross.svg'

import { ThemeContext, TodosContext } from '../../config/context'

const Todo = ({todo}) => {
  const {dispatch} = useContext(TodosContext) 
  const {darkTheme} = useContext(ThemeContext)

  
  const handleCompleted = (todo) =>{
    dispatch({type: 'COMPLETED', id: todo.id})
  }
  
  const handleRemove = (todo) =>{
    dispatch({type: 'REMOVE_TODO', id: todo.id})
  }

  const theme = darkTheme ? 'box__theme--dark': ''
  const checked = todo.completed ? 'checked': ''
  const textChecked = todo.completed ? 'box__text--checked' : '' 

  return (
    <div className={`box ${theme}`}>
      <div className="box__check" onClick={()=>handleCompleted(todo)}>
        <div className={`box__circle ${checked}`}>{todo.completed && <img src={check} alt="error" />}</div>
      </div>
      <div className={`box__text ${textChecked}`}>
        {todo.text}
      </div>
      <div className="box__check" onClick={()=>handleRemove(todo)}>
          <img src={cross} alt="" />
      </div>   
    </div>
  )
}

export default Todo