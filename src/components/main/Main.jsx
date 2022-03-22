import React, { useState, useReducer,useEffect} from 'react'

import { TodosContext } from '../../config/context'
import reducer from '../../config/reducer'
import { useLocalStorage } from '../../config/useLocalStorage'

import './main.scss'

import MainHeader from '../mainheader/MainHeader'
import TodoInput from '../todoinput/TodoInput'
import TodoList from '../todolist/TodoList'
import Tool from '../tool/Tool'

  
  const Main = () => {
      const [initTodos, setInitTodos] = useLocalStorage('todos', [])
      const [todos, dispatch] = useReducer(reducer,initTodos)
      const [todo, setTodo] = useState('')
      const [activeStatus,setActive] = useState('all')
      
      useEffect(()=>{
        setInitTodos(todos)
      }, [todos])

      return (
    <TodosContext.Provider value={{todos, dispatch}}>
        <div className='main'>
                <MainHeader/>
                <TodoInput todo={todo} setTodo={setTodo} />
                <TodoList activeStatus={activeStatus}/> 
                <Tool activeStatus={activeStatus} setActive={setActive}/>
        </div>
    </TodosContext.Provider>
  )
}

export default Main