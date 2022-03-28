import React, { useContext, useEffect, useState } from 'react'
import './todolist.scss'

import { ThemeContext, TodosContext } from '../../config/context'
import Todo from '../todo/Todo'

const TodoList = ({activeStatus}) => {

  
  const {todos} = useContext(TodosContext)
  const {darkTheme} = useContext(ThemeContext)
  const [todolist, setTodolist] = useState(todos)

  const theme = darkTheme ? 'todolist__theme--dark' : ''
  
  
  useEffect(()=>{
    
   
    switch(activeStatus){
      case 'all':
        setTodolist(todos)
        break;
      case 'active':
        setTodolist(todos.filter(todo=>(todo.completed !== true)))
        break;
      case 'completed':
        setTodolist(todos.filter(todo=>(todo.completed === true)))
        break;
    }


  },[activeStatus,todos])

  
  const todoElement = todolist.map((todo)=>(
    <Todo key={todo.id} todo={todo}/>
  ))
  return (
    <div className={`todolist ${theme}`}>
              {todoElement}
    </div>

  )
}

export default TodoList