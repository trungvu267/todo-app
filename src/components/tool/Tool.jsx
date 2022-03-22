import React, { useContext} from 'react'

import './tool.scss'

import { ThemeContext, TodosContext } from '../../config/context'

const Tool = ({activeStatus, setActive}) => {

  const {todos, dispatch} = useContext(TodosContext)
  const {darkTheme} = useContext(ThemeContext)
  const handleClear = () =>{
    dispatch({type:'CLEAR_COMPLETED'})
  }
  const handleStatus = (value) =>{
    setActive(value)
  }

  const styleAll = activeStatus === 'all' ? 'clicked__all' : ''
  const styleActive = activeStatus === 'active' ? 'clicked' : ''  
  const styleCompleted = activeStatus === 'completed' ? 'clicked' : ''  
  const theme = darkTheme ? 'tool__theme--dark' : '' 
  return (
    <div className={`tool ${theme}`}>
      <div className="tool__item--first">{todos.length} {todos.length <= 1 ? 'item' : 'items'}</div>
      <div className="tool__status">
      <div onClick={()=>handleStatus('all')} className={`tool__all ${styleAll}`}>All</div>
      <div onClick={()=>handleStatus('active')} className={styleActive}>Active</div>
      <div onClick={()=>handleStatus('completed')} className={styleCompleted}>Completed</div>
      </div>
      <div className="tool__item--last" onClick={handleClear}>Clear Completed</div>
    </div>
  )
}

export default Tool